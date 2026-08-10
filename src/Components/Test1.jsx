import { useState } from "react";

const Test1 = () => {
  // STATE:
  const users = [
    { name: "Fruvio", age: 26, profession: "Web Developper" },
    { name: "Eren", age: 19, profession: "Shingeki" },
    { name: "Mikasa", age: 19, profession: "Hero" },
    { name: "MissX", age: 24, profession: "Anesthe" },
    { name: "Jean", age: 20, profession: "Soldier" },
  ];
  const [age, setAge] = useState(true);
  const [profession, setProfession] = useState(true);
  const [name, setName] = useState(true);
  // MANIPULATION:
  // RETURN:
  return (
    <div className="space-y-10 flex flex-col items-center mt-10">
      <div className=" flex justify-center">
        <div className="bg-white">
          <table className=" table-auto border-collapse border text-center min-h-40 max-w-150 min-w-150">
            <thead>
              <tr className="bg-warning">
                <th className="border"> Name </th>
                <th className="border"> Age</th>
                <th className="border">Profession</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" text-center border ">{name}</td>
                <td className=" text-center border ">{age}</td>
                <td className=" text-center border ">{profession}</td>
              </tr>
            </tbody>
          </table>
          <div className=" gap-4 h-15 bouton flex justify-center mb-2 items-end">
            <button
              onClick={() =>
                setName(
                  users.map((user) => (
                    <li key={users.name} className="  list-none flex">
                      {user.name}
                    </li>
                  )),
                )
              }
              className="btn w-30 btn-primary "
            >
              nom
            </button>
            <button
              onClick={() =>
                setAge(
                  users.map((user) => (
                    <li key={users.name} className="list-none">
                      {user.age}
                    </li>
                  )),
                )
              }
              className="btn w-30 btn-secondary "
            >
              Age
            </button>
            <button
              onClick={() =>
                setProfession(
                  users.map((user) => (
                    <li key={users.name} className=" list-none">
                      {user.profession}{" "}
                    </li>
                  )),
                )
              }
              className="btn w-30 btn-warning "
            >
              Profession
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test1;
