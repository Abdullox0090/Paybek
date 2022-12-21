import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";

function SectionBottom(props) {
  const items = [
    {
      name: "Abdulloh",
      description: "Frontend developer",
      title:`"Best user-friendly Webinar platform with intuitive UI/UX which is secure and reliable. “I think this Webinar was so exactly that, It was at the center of what we were doing, but it was easy so that it just fell to the back of our main brains so that we could focus on the content and the for experience without worrying about the technology "Best user-friendly Webinar platform with intuitive UI/UX which is secure and reliable. “I think this Webinar was so exactly that, It was at the center of what we were doing, but it was easy so that it just fell to the back of our main brains so that we could focus on the content and the for experience without worrying about the technology.” `,
    },

    {
      name: "Abdulaziz",
      description: "Backend developer",
      title:
        `"Best user-friendly Webinar platform with intuitive UI/UX which is secure and reliable. “I think this Webinar was so exactly that, It was at the center of what we were doing, but it was easy so that it just fell to the back of our main brains so that we could focus on the content and the for experience without worrying about the technology "Best user-friendly Webinar platform with intuitive UI/UX which is secure and reliable. “I think this Webinar was so exactly that, It was at the center of what we were doing, but it was easy so that it just fell to the back of our main brains so that we could focus on the content and the for experience without worrying about the technology.”"Best user-friendly Webinar platform with intuitive UI/UX which is secure and reliable. “I think this Webinar was so exactly that, It was at the center of what we were doing, but it was easy so that it just fell to the back of our main brains so that we could focus on the content and the for experience `
    },
    {
      name: "Elbek",
      description: "FullStack developer",
      title:
        `"title:Best user-friendly Webinar platform with intuitive UI/UX which is secure and reliable. “I think this Webinar was so exactly that, It was at the center of what we were doing, but it was easy so that it just fell to the back of our main brains so that we could focus on the content and the for experience without worrying about the technology Best user-friendly Webinar platform with intuitive UI/UX which is secure and reliable. “I think this Webinar was so exactly that, It was at the center of what we were doing, but it was easy so that it just fell to the back of our main brains so that we could focus on the content and the for experience without worrying about the technology.`
    },
  ];

  return (
    <>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
}

export default SectionBottom;
