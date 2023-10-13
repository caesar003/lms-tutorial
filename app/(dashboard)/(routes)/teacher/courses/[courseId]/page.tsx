import React from "react";

export default function Course({ params }: { params: { courseId: string } }) {
  return <div>courseId: {params.courseId}</div>;
}
