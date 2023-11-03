import Link from "next/link";
import * as Icons from "react-icons/hi";
import { stats } from "data/UI_data";

type $Bailiff = {
  name: string;
};

const BailiffHero = (props: $Bailiff) => {
  return (
    <section className="w-full py-14">
      <div className="--md:px-8 mx-auto max-w-screen-xl px-4 text-gray-600">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-2 text-center">
          <div className="--md:flex-row mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-2 text-center">
            <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
              {props.name}
            </h3>
          </div>
          <p className="mt-3">So far how this bailiff is performing!</p>
        </div>
        <div className="mt-12">
          <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
            {stats.map((item, idx) => (
              <li key={idx} className="--md:px-16 px-12 text-center">
                <h4 className="text-4xl font-semibold text-green-500">
                  {item.data}
                </h4>
                <p className="mt-3 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BailiffHero;
