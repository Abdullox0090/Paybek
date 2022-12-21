import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";

function SectionBottom(props) {
  const items = [
    {
      name: "Abdulloh",
      description: "Frontend developer",
      title:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit veniam quo necessitatibus excepturi magnam quaerat id laborum atque reiciendis autem expedita veritatis consequatur minima sequi tempora obcaecati, harum quos. Eius vitae eveniet hic aliquam harum alias, sunt accusamus id placeat. Non, necessitatibus voluptas! Natus, vel! Ut accusantium minima tempora officiis deleniti quis minus perspiciatis eligendi assumenda, quas expedita maxime iste inventore nulla veritatis. Perferendis possimus porro sequi necessitatibus! Repellat iusto tenetur culpa doloribus excepturi fugit similique cumque, quidem voluptatum dolore quae ipsa esse maiores odio officiis quasi molestiae nisi eligendi eveniet repellendus omnis? Consectetur reprehenderit architecto nam quibusdam sit ptatem quam quasi consectetur fuga velit in assumenda, fugiat sed. Reiciendis sunt totam debitis optio eos eaque magnam aliquid  `,
    },

    {
      name: "Abdulaziz",
      description: "Backend developer",
      title:
        "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum adipisci title:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit veniam quo necessitatibus excepturi magnam quaerat id laborum atque reiciendis autem expedita veritatis consequatur minima sequi tempora obcaecati, harum quos. Eius vitae eveniet hic aliquam harum alias, sunt accusamus id placeat. Non, necessitatibus voluptas! Natus, vel! Ut accusantium minima tempora officiis deleniti quis minus perspiciatis eligendi assumenda, quas expedita maxime iste inventore nulla veritatis. Perferendis possimus porro sequi necessitatibus! Repellat iusto tenetur culpa doloribus excepturi fugit "
    },
    {
      name: "Elbek",
      description: "FullStack developer",
      title:
        "title:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit veniam quo necessitatibus excepturi magnam quaerat id laborum atque reiciendis autem expedita veritatis consequatur minima sequi tempora obcaecati, harum quos. Eius vitae eveniet hic aliquam harum alias, sunt accusamus id placeat. Non, necessitatibus voluptas! Natus, vel! Ut accusantium minima tempora officiis deleniti quis minus perspiciatis eligendi assumenda, quas expedita maxime iste inventore nulla veritatis. Perferendis possimus porro sequi necessitatibus! Repellat iusto tenetur culpa doloribus excepturi fugit similique cumque, quidem voluptatum dolore quae ipsa esse maiores odio officiis quasi molestiae nisi eligendi eveniet repellendus omnis? Consectetur reprehenderit architecto n",
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
