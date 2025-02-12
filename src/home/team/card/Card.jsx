import cardStyle from './card.module.css'

const Card = ({image, name, position, link, bio }) => {
  return (
    <div className={cardStyle.body}>
      <div className={cardStyle.top}>
        <div className={cardStyle.image}>
          <svg
            width="99"
            height="98"
            viewBox="0 0 99 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="mask1" x="0" y="0" width="99" height="98">
                <path
                  d="M84.631 48.9117C117.473 86.3213 87.1455 116.649 49.7359 83.8068C12.3263 116.649 -18.0016 86.3213 14.8408 48.9117C-18.0016 11.5021 12.3263 -18.8258 49.7359 14.0166C87.1455 -18.8258 117.473 11.5021 84.631 48.9117Z"
                  fill="white"
                />
              </mask>
            </defs>

            <image
              href={image}
              x="0"
              y="0"
              width="99"
              height="98"
              mask="url(#mask1)"
            />
          </svg>
        </div>
        <div className={cardStyle.info}>
          <h4>{name}</h4>
          <p>{position}</p>
          <a href={link}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="black" />
              <path
                d="M9.31776 25H12.8131V13.6844H9.31776V25Z"
                fill="#B9FF66"
              />
              <path
                d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z"
                fill="#B9FF66"
              />
              <path
                d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z"
                fill="#B9FF66"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className={cardStyle.bottom}>
        <div className={cardStyle.bio}>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Card




