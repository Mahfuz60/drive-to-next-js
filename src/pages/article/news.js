import { Button } from "antd";
import Link from "next/link";


const NewsPage = () => {
  return (
    <div>
      <h1>Welcome to News Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aperiam corrupti earum quidem 
        qui autem debitis officia laboriosam! Iste incidunt excepturi iusto, eligendi laudantium voluptates 
        corporis tempore eaque debitis dicta dolores! Voluptatibus magni perferendis deserunt officia quae. 
        Architecto, aspernatur aliquam eveniet iste minima ea, totam sit aut error laudantium delectus?
      </p>

      <Button type="primary">
       <Link href="/">Back To Home</Link>
      </Button>

    </div>
  );
};

export default NewsPage;