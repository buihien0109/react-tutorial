import React, { useState, useEffect } from "react";
import queryString from "query-string";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import "./App.css";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";

function App() {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  // Sử dụng để chuyên cho phần lọc, có thể thêm các thành phần khác vào : term, sort, ...
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });

  // Ẩn hiện component Clock
  // const [showClock, setShowClock] = useState(true);

  useEffect(() => {
    const controller = new AbortController();


    async function fetchPostList() {

      try {
        // Parse object filter thành query string
        const paramsString = queryString.stringify(filters);

        // Gọi API
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl, {
          signal: controller.signal
        });
        const responseJSON = await response.json();
        console.log(responseJSON);

        // Set lại data
        const { data, pagination } = responseJSON;

        setPosts(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Fail to load post " + error.message);
      }
    }

    fetchPostList();

    return () => {
      controller.abort();
    }
  }, [filters]);

  // Thêm effect khác
  useEffect(() => {
    console.log("Other effect");
  });

  // Xử lý khi thay đổi page
  const handlePageChange = (newPage) => {
    console.log(newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  };

  // Xử lý khi submit form
  const handleFiltersChange = (newFilters) => {
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  };

  return (
    <div className="app">
      <h2>Learn UseEffect</h2>

      {/* {showClock && <Clock />}

      <button onClick={() => setShowClock(false)}>Hide Clock</button> */}

      <PostFiltersForm onSubmit={handleFiltersChange} />

      <PostList posts={posts} />

      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
