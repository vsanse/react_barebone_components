import "./Skeleton.scss";
import React from "react";

export default function Skeleton({
  children,
  loading,
  width,
  height,
  borderRadius
}) {
  return (
    <div
      className={`app__skeleton`}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        animationName: loading ? "shimmer" : "",
        background: loading ? "" : "transparent"
      }}
    >
      {children && (
        <div className={`app__skeleton--content ${!loading ? "active" : ""}`}>
          {children}
        </div>
      )}
    </div>
  );
}
Skeleton.defaultProps = {
  width: "auto",
  height: "auto",
  borderRadius: 0,
  loading: true,
  shape: ""
};
