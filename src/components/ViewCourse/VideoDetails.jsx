import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams, useLocation } from "react-router-dom"

import { markLectureAsComplete } from "../../services/operation/course"
import { updateCompletedLectures } from "../../slices/viewCourseSlice"
import IconBtn from "../../components/common/IconBtn"

const VideoDetails = () => {
  const { courseId, sectionId, subSectionId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const playerRef = useRef(null)
  const dispatch = useDispatch()

  const { token } = useSelector((state) => state.auth)
  const { courseSectionData, courseEntireData, completedLectures } =
    useSelector((state) => state.viewCourse)

  const [videoData, setVideoData] = useState(null)
  const [previewSource, setPreviewSource] = useState("")
  const [videoEnded, setVideoEnded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if (!courseSectionData.length) return

    if (!courseId || !sectionId || !subSectionId) {
      navigate(`/dashboard/enrolled-courses`)
      return
    }

    const section = courseSectionData.find((s) => s._id === sectionId)
    const subSection = section?.subSection.find((ss) => ss._id === subSectionId)

    setVideoData(subSection)
    setPreviewSource(courseEntireData?.thumbnail)
    setVideoEnded(false)
  }, [courseSectionData, courseEntireData, location.pathname])

  // Auto mark complete at 90% watched
  useEffect(() => {
    if (!duration) return

    const percentWatched = (currentTime / duration) * 100
    if (
      percentWatched > 90 &&
      !completedLectures.includes(subSectionId)
    ) {
      handleLectureCompletion()
    }
  }, [currentTime, duration])

  const handleLectureCompletion = async () => {
    if (loading) return
    setLoading(true)
    const res = await markLectureAsComplete(
      { courseId, subsectionId: subSectionId },
      token
    )
    if (res) {
      dispatch(updateCompletedLectures(subSectionId))
    }
    setLoading(false)
  }

  const isFirstVideo = () => {
    const secIdx = courseSectionData.findIndex((s) => s._id === sectionId)
    const subIdx = courseSectionData[secIdx].subSection.findIndex(
      (ss) => ss._id === subSectionId
    )
    return secIdx === 0 && subIdx === 0
  }

  const isLastVideo = () => {
    const secIdx = courseSectionData.findIndex((s) => s._id === sectionId)
    const subLen = courseSectionData[secIdx].subSection.length
    const subIdx = courseSectionData[secIdx].subSection.findIndex(
      (ss) => ss._id === subSectionId
    )
    return secIdx === courseSectionData.length - 1 && subIdx === subLen - 1
  }

  const goToNextVideo = () => {
    const secIdx = courseSectionData.findIndex((s) => s._id === sectionId)
    const subIdx = courseSectionData[secIdx].subSection.findIndex(
      (ss) => ss._id === subSectionId
    )

    if (subIdx < courseSectionData[secIdx].subSection.length - 1) {
      const nextId =
        courseSectionData[secIdx].subSection[subIdx + 1]._id
      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${nextId}`
      )
    } else {
      const nextSection = courseSectionData[secIdx + 1]
      navigate(
        `/view-course/${courseId}/section/${nextSection._id}/sub-section/${nextSection.subSection[0]._id}`
      )
    }
  }

  const goToPrevVideo = () => {
    const secIdx = courseSectionData.findIndex((s) => s._id === sectionId)
    const subIdx = courseSectionData[secIdx].subSection.findIndex(
      (ss) => ss._id === subSectionId
    )

    if (subIdx > 0) {
      const prevId =
        courseSectionData[secIdx].subSection[subIdx - 1]._id
      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${prevId}`
      )
    } else {
      const prevSection = courseSectionData[secIdx - 1]
      const lastSub =
        prevSection.subSection[prevSection.subSection.length - 1]._id
      navigate(
        `/view-course/${courseId}/section/${prevSection._id}/sub-section/${lastSub}`
      )
    }
  }

  return (
    <div className="flex flex-col gap-5 text-white">
      {!videoData ? (
        <img
          src={previewSource}
          alt="Preview"
          className="h-full w-full rounded-md object-cover"
        />
      ) : (
        <div className="relative">
          <video
            ref={playerRef}
            className="w-full h-[600px] rounded-lg"
            controls
            src={videoData?.videoUrl}
            onEnded={() => setVideoEnded(true)}
            onTimeUpdate={(e) => {
              setCurrentTime(e.target.currentTime)
              setDuration(e.target.duration)
            }}
            onLoadedMetadata={(e) => {
              if (videoData?.lastWatchedTime) {
                e.target.currentTime = videoData.lastWatchedTime
              }
            }}
          />

          {videoEnded && (
            <div className="absolute inset-0 z-10 grid place-content-center bg-black/70">
              {!completedLectures.includes(subSectionId) && (
                <IconBtn
                  disabled={loading}
                  onclick={handleLectureCompletion}
                  text={loading ? "Loading..." : "Mark As Completed"}
                  customClasses="text-xl px-4 mx-auto"
                />
              )}

              <IconBtn
                text="Rewatch"
                customClasses="text-xl px-4 mx-auto mt-2"
                onclick={() => {
                  if (playerRef.current) {
                    playerRef.current.currentTime = 0
                    setVideoEnded(false)
                  }
                }}
              />

              <div className="mt-6 flex gap-4 justify-center">
                {!isFirstVideo() && (
                  <button onClick={goToPrevVideo} className="blackButton">
                    Prev
                  </button>
                )}
                {!isLastVideo() && (
                  <button onClick={goToNextVideo} className="blackButton">
                    Next
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      <h1 className="mt-4 text-3xl font-semibold">{videoData?.title}</h1>
      <p className="pt-2 pb-6">{videoData?.description}</p>
    </div>
  )
}

export default VideoDetails
