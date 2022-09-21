import React from 'react'
import { useSearchParams } from 'react-router-dom';

function Laptop() {
  let [searchParams, setSearchParams] = useSearchParams();
  const brand = searchParams.get("brand");
  const rating = searchParams.get("rating");

  return (
    <>
      <h1>Laptop</h1>
      <div className="mt-5 mb-4">
        Lọc:
        <button
          className="btn btn-outline-primary ms-2"
          onClick={() => setSearchParams({ brand: "macbook" })}
        >
          Brand
        </button>
        <button
          className="btn btn-outline-primary mx-2"
          onClick={() =>
            setSearchParams({
              brand: "macbook",
              rating: 5
            })
          }
        >
          Rating
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => setSearchParams({})}
        >
          Clear
        </button>
      </div>
      <h1>
        Các từ khóa: {brand}, {rating}
      </h1>
    </>

  )
}

export default Laptop