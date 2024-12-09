import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const Category = () => {
  // LocalStorage থেকে ডেটা ফেচ করা
  let localData = JSON.parse(localStorage.getItem("data"));

  // useLoaderData থেকে ডেটা লোড করা
  let data = useLoaderData();

  // cateValue যাচাই এবং সেট করা
  let cateValue = Array.isArray(data) ? data : Array.isArray(localData) ? localData : [];

  // ক্যাটেগরি তৈরি এবং ডুপ্লিকেট রিমুভ করা
  let categoris = Array.isArray(cateValue)
    ? cateValue.map((category) => category.category)
    : [];

  let sidebar = new Set(categoris);
  let categoryArr = [...sidebar];

  return (
    <div>
      <div className="bg-gray-200 rounded-2xl p-5 space-y-4 py-8">
        <NavLink to="/allProduct" className="btn btn-primary btn-block rounded-full sora_font">
          All Products
        </NavLink>
        {Array.isArray(categoryArr) &&
          categoryArr.map((cate) => (
            <NavLink
              key={cate}
              to={`/${cate}`}
              className="btn btn-primary btn-block rounded-full sora_font"
            >
              {cate}
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default Category;
