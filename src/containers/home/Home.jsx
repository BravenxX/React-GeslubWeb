import React, { Fragment } from "react";
import {
  FloatingActionButton,
  InfFooter,
  NormalNavbar,
  NormalSidenav
} from "../../components";

const Home = () => {
  return (
    <Fragment>
      <NormalSidenav />
      <div className="container">
        <div className="row">
          <div className="col s12 center ">
            <h1 className="blue-text text-darken-2">GESLUB</h1>
          </div>
          <div className="col s12 hoverable">
            <p className="flow-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ipsum tempora nostrum sunt enim, praesentium libero
              quod quidem odit sequi! Nobis ea quo sunt officiis necessitatibus
              exercitationem culpa nam! Velit? Lorem, ipsum. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Corporis, officia veniam
              alias deleniti repellat provident quam exercitationem. Itaque
              natus exercitationem consequuntur ex. Velit, minima. Quibusdam ea
              blanditiis dolor pariatur maxime!Lorem Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aut odit veritatis accusantium
              aliquam ex tenetur est expedita, dolor fuga exercitationem fugit
              nemo rerum incidunt neque fugiat odio. Incidunt, voluptas
              inventore! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. At, explicabo. Nesciunt ducimus pariatur nobis officia
              voluptates, cum possimus earum, reiciendis voluptatibus quod
              placeat mollitia non consectetur tenetur cumque! Quasi, inventore.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              totam eos, repellat atque veniam quidem fugit aperiam sit,
              deleniti odit, voluptate nam cumque harum nihil fuga dolorum
              soluta rem minima? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quos, quod. Facilis in, libero, necessitatibus
              aspernatur ratione cupiditate fugit sint officia sit culpa ipsum
              ex, ut exercitationem assumenda. Quisquam, dolor aspernatur!
            </p>
          </div>
        </div>
        <FloatingActionButton />
      </div>
    </Fragment>
  );
};

export default Home;
