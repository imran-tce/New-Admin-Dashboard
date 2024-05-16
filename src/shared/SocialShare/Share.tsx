import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

interface ShareProps {
  description: string;
}
export default function Share({ description }: ShareProps) {
  const url = window.location.href;

  return (
    <>
      <FacebookShareButton url={url} title={description}>
        <FacebookIcon size={26} round={true} />
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={description}>
        <LinkedinIcon size={26} round={true} />
      </LinkedinShareButton>
      <WhatsappShareButton url={url} title={description}>
        <WhatsappIcon size={26} round={true} />
      </WhatsappShareButton>
      <EmailShareButton url={url} subject={description}>
        <EmailIcon size={26} round={true} />
      </EmailShareButton>
    </>
  );
}
