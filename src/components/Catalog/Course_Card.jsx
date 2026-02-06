import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Rating } from "react-simple-star-rating"

import GetAvgRating from "../../utils/avgRating"

function Course_Card({ course, Height }) {
  const [avgReviewCount, setAvgReviewCount] = useState(0)

 useEffect(() => {
  if (!course?.ratingAndReviews) return
  const avg = GetAvgRating(course.ratingAndReviews)
  setAvgReviewCount(avg)
}, [course?._id, course?.ratingAndReviews?.length])


  return (
    <Link to={`/courses/${course?._id}`}>
      <div>
        <div className="rounded-lg">
          <img
            src={course?.thumbnail}
            alt="course thumbnail"
            className={`${Height} w-full rounded-xl object-cover`}
          />
        </div>

        <div className="flex flex-col gap-2 px-1 py-3">
          <p className="text-xl text-richblack-5">{course?.courseName}</p>

          <p className="text-sm text-richblack-50">
            {course?.instructor?.firstName} {course?.instructor?.lastName}
          </p>

          <div className="flex items-center gap-2">
            <span className="text-yellow-5">{avgReviewCount}</span>

            <Rating
  key={avgReviewCount}
  initialValue={avgReviewCount}
  readonly
  size={20}
  allowFraction
  SVGclassName="inline-block"
/>

            <span className="text-richblack-400">
              {course?.ratingAndReviews?.length || 0} Ratings
            </span>
          </div>

          <p className="text-xl text-richblack-5">
            Rs. {course?.price}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Course_Card
