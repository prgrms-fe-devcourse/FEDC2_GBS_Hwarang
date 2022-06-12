import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import Image from "components/Image";
import userInfo from "recoil/user";

function UserPage() {
  const myInfo = useRecoilValue(userInfo);
  const [profileImg, setProfileImg] = useState(
    myInfo.image ||
      "https://cdn.pixabay.com/photo/2022/06/06/10/55/cat-7245850_960_720.jpg"
  );
  const [coverImg, setCoverImg] = useState(
    myInfo.coverImage ||
      "https://cdn.pixabay.com/photo/2022/06/06/10/55/cat-7245850_960_720.jpg"
  );

  return (
    <div>
      <h1>{myInfo?.email}</h1>
    </div>
  );
}

export default UserPage;
