import React, { useState } from "react";
import Skeleton from "../components/Skeleton/Skeleton";
import Switch from "../components/Switch/Switch";

export default function SkeletonDemo() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="App__Section">
      <p className="App__Section--title">Skeleton</p>
      <div className="App__grid2">
        <div>
          <p className="App__demoTitle">Without Children</p>
          <Skeleton width="100%" height="20px" borderRadius="20px" />
          <br />
          <Skeleton width="40px" height="40px" borderRadius="50%" />
        </div>
        <div>
          <p className="App__demoTitle">With Children</p>
          <Switch
            onChange={(isChecked) => setIsLoading(isChecked)}
            defaultValue={true}
            id="skeleton_loading"
            label={isLoading ? "Loading" : "Not Loading"}
          />
          <br />
          <br />
          <Skeleton loading={isLoading}>
            <h3>This is dummy text for skeleton</h3>
          </Skeleton>
        </div>
      </div>
    </div>
  );
}
