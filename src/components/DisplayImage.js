import React, { useEffect, useState } from "react";

const DisplayImage = () => {
  const [showImage, setShowImage] = useState();
  let [count, setCount] = useState(0);
  let imges = [
    "https://images.pexels.com/photos/29773887/pexels-photo-29773887/free-photo-of-charming-getreidegasse-in-salzburg-austria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4863950/pexels-photo-4863950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/19929417/pexels-photo-19929417/free-photo-of-view-of-a-street-and-buildings-in-merano-south-tyrol-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];

  useEffect(() => {
    setShowImage(imges[count]);
    let timer = setTimeout(() => {
      setCount((pre) => (pre + 1) % imges.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <img src={showImage} alt="slideShow" />
    </div>
  );
};

export default DisplayImage;
