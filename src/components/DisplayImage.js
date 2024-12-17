import React, { useEffect, useState } from "react";

const DisplayImage = () => {
  const [showImage, setShowImage] = useState();
  let [count, setCount] = useState(0);
  let imges = [
    "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem/image/MQ6-0-image-20220419101504/01-mercedes-benz-the-new-eqs-suv-x296-2021-1080x1350.jpeg",
    "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_546277676/image/MQ6-0-image-20220819111550/02-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg",
    "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_546277676/image/MQ6-0-image-20220819111550/02-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg",
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
