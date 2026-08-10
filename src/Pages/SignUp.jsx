import { useState } from "react";
import "../Css/Premium.css";
function SignUp() {
  const [sex, setSex] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [old, setOld] = useState("");
  const [login, setLogin] = useState("");
  const [mdp1, setMdp1] = useState("");
  const [mdp2, setMdp2] = useState("");
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState({});

  const sub = (e) => {
    e.preventDefault();
    let newErrors = {};

    //Verification:
    //Sex:

    //Name:
    if (name.trim() === "") {
      newErrors.name = "Fill the case";
    } else if (name.length < 3) {
      newErrors.name = "Minimum 3 characteres";
    }

    //firstname:
    if (firstName.trim() === "") {
      newErrors.firstName = "Fill the case";
    } else if (firstName.length < 3) {
      newErrors.firstName = "Minimum 3 characteres";
    }

    //Old:
    if (old.trim() === "") {
      newErrors.old = "Fill the case";
    } else if (isNaN(old)) {
      newErrors.old = " A number !";
    } else if (old < 15 || old > 140) {
      newErrors.old = "between 15 et 140";
    }

    //login:
    if (login.trim() === "") {
      newErrors.login = "Fill the case";
    } else if (login.length < 4) {
      newErrors.login = "Minimum 4 characteres";
    } else if (!login.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.login = "Not an Email!";
    }

    //mdp1:
    if (mdp1.trim() === "") {
      newErrors.mdp1 = "Fill de case";
    } else if (mdp1.length < 6) {
      newErrors.mdp1 = "Minimum 6 characteres";
    }

    //mdp2:
    if (mdp2.trim() === "") {
      newErrors.mdp2 = "Fill the case";
    } else if (mdp2 !== mdp1) {
      newErrors.mdp2 = "Must the same of the first";
    }

    //Country:
    if (country === "none" || country === "") {
      newErrors.country = "Select natal country";
    }

    // If everything is correct:
    if (!errors) {
      alert("Everything is correct, Perfect");
    }

    setErrors(newErrors);
  };

  return (
    <div className="flex ml-40 flex-col justify-center items-center">
      <h1 className="text-5xl text-accent text-center underline mb-5">
        Premium formulare
      </h1>
      <form onSubmit={sub} className="w-160">
        <span
          id="deb"
          className="text-white text-right w-[200px] inline-block "
        >
          Sexe :
        </span>
        <label className="text-white ml-5 mr-3">
          <input
            type="radio"
            name="sexe"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="homme"
          />
          Homme
        </label>
        <label className="text-white mr-2">
          <input
            type="radio"
            name="sexe"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="femme"
          />
          Femme
        </label>
        {errors.sex && (
          <span className="end text-orange-800 bg-yellow-400 rounded-sm ml-2 inline-block h-7 w-45 text-center  ">
            {errors.sex}{" "}
          </span>
        )}
        <br />

        <label
          id="deb"
          className="text-white text-right w-[200px] inline-block "
        >
          Name :
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" input input-sm m-2 w-40 bg-base-300 px-5 text-sm font-bold "
        />
        {errors.name && (
          <span className="end text-orange-800 bg-yellow-400 rounded-sm ml-2 inline-block h-7 w-45 text-center  ">
            {" "}
            {errors.name}{" "}
          </span>
        )}
        <br />

        <label
          id="deb"
          className="text-white text-right w-[200px] inline-block "
        >
          FirstName :
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className=" input input-sm m-2 w-40 bg-base-300 px-5 text-sm font-bold "
        />
        {errors.firstName && (
          <span className="end text-orange-800 bg-yellow-400 rounded-sm ml-2 inline-block h-7 w-45 text-center  ">
            {errors.firstName}
          </span>
        )}
        <br />

        <label
          id="deb"
          className="text-white text-right w-[200px] inline-block "
        >
          Old :
        </label>
        <input
          type="text"
          value={old}
          onChange={(e) => setOld(e.target.value)}
          className=" input input-sm m-2 w-40 bg-base-300 px-5 text-sm font-bold "
        />
        {errors.old && (
          <span className="end text-orange-800 bg-yellow-400 rounded-sm ml-2 inline-block h-7 w-45 text-center  ">
            {errors.old}
          </span>
        )}
        <br />

        <label
          id="deb"
          className="text-white text-right w-[200px] inline-block "
        >
          Pseudo :
        </label>
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className=" input input-sm m-2 w-40 bg-base-300 px-5 text-sm font-bold "
        />
        {errors.login && (
          <span className="end text-orange-800 bg-yellow-400 rounded-sm ml-2 inline-block h-7 w-45 text-center  ">
            {" "}
            {errors.login}{" "}
          </span>
        )}
        <br />

        <label
          id="deb"
          className="text-white text-right w-[200px] inline-block "
        >
          Password :
        </label>
        <input
          type="password"
          value={mdp1}
          onChange={(e) => setMdp1(e.target.value)}
          className=" input input-sm m-2 w-40 bg-base-300 px-5 text-sm font-bold "
        />
        {errors.mdp1 && (
          <span className="end text-orange-800 bg-yellow-400 rounded-sm ml-2 inline-block h-7 w-45 text-center  ">
            {" "}
            {errors.mdp1}{" "}
          </span>
        )}
        <br />

        <label
          id="deb"
          className="text-white text-right w-[200px] inline-block "
        >
          Confirmation :
        </label>
        <input
          type="password"
          value={mdp2}
          onChange={(e) => setMdp2(e.target.value)}
          className=" input input-sm m-2 w-40 bg-base-300 px-5 text-sm font-bold "
        />
        {errors.mdp2 && (
          <span className="end text-orange-800 bg-yellow-400 rounded-sm ml-2 inline-block h-7 w-46 text-center  ">
            {" "}
            {errors.mdp2}{" "}
          </span>
        )}
        <br />

        <span
          id="deb"
          className="text-white text-right w-[200px] inline-block "
        >
          Country :
        </span>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border border-gray-500 bg-gray-400 w-40 ml-2 rounded-[4px] py-[3px]"
        >
          <option value="none">Select your country</option>
          <option value="md">Madagasikara</option>
          <option value="jp">Japanese</option>
          <option value="us">United-State</option>
          <option value="uk">United-Kingdom</option>
        </select>
        {errors.country && (
          <span className="end text-orange-800 bg-yellow-400 rounded-sm ml-2 inline-block h-7 w-45 text-center  ">
            {errors.country}{" "}
          </span>
        )}
        <br />

        <span
          id="deb"
          className="text-white text-right w-[200px] inline-block "
        ></span>
        <input type="checkbox" />
        <span className="text-white"> Want to be notified ?</span>
        <br />
        <div className="flex justify-center  w-140">
          <div className="flex gap-5">
            <button type="submit" className="btn btn-lg btn-primary">
              Send
            </button>
            <button type="reset" className="btn btn-lg btn-warning ">
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
