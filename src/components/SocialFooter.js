import React from "react";

export default function SocialFooter(props) {
  return (
    <div className="post-social-links text-center with_border">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURI(
          props.url
        )}&text=${encodeURI(props.title)}`}
        className="social-icon color-icon soc-twitter"
        target="_blank"
      />
      <a
        href={`https://www.facebook.com/sharer.php?u=${encodeURI(props.url)}`}
        className="social-icon color-icon soc-facebook"
        target="_blank"
      />
      <a
        href={`https://getpocket.com/edit?url=${encodeURI(props.url)}`}
        className="social-icon color-icon soc-pocket"
        target="_blank"
      />
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(
          props.url
        )}&title=${encodeURI(props.title)}`}
        className="social-icon color-icon soc-linkedin"
        target="_blank"
      />
    </div>
  );
}
