import { useState } from "react";

export default function Calculator() {
  // States:
  const [value, setValue] = useState("");
  return (
    <div className="h-100 mb-50 mt-5">
      <div className="flex justify-center ">
        <div className="flex flex-col bg-base-300 justify-center items-center w-[350px] backdrop-filter-[blur(20px)] border rounded-xl py-3">
          <textarea
            readOnly
            value={value}
            className="textarea outline-none bg-[cornflowerblue] text-5xl "
          ></textarea>
          <div className="">
            <h3 className="card  card-title mt-2 mb-2 text-lg text-primary">
              DjiCalcul
            </h3>
          </div>
          <div className="border bg-base-100 rounded-xl py-2">
            <div>
              <input
                onClick={() => setValue("")}
                type="button"
                className="btn btn-success w-20 h-20 text-neutral text-xl font-bold m-0.5 rounded-lg"
                value="C"
              />
              <input
                onClick={() => setValue(value.slice(0, -1))}
                type="button"
                className="btn btn-success w-20 h-20 text-neutral text-xl font-bold m-0.5 rounded-lg"
                value="del"
              />
              <input
                onClick={(e) => setValue(e.replace("%", "/100"))}
                type="button"
                className="btn btn-success w-20 h-20 text-neutral text-xl font-bold m-0.5 rounded-lg"
                value="%"
              />
              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                className="btn btn-success w-20 h-20 text-neutral text-xl font-bold m-0.5 rounded-lg"
                value="/"
              />
            </div>
            <div>
              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                className="btn btn-primary w-20 h-20 text-base-300 m-0.5 rounded-lg"
                value="7"
              />
              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                className="btn btn-primary w-20 h-20 text-base-300 m-0.5 rounded-lg"
                value="8"
              />
              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                className="btn btn-primary w-20 h-20 text-base-300 m-0.5 rounded-lg"
                value="9"
              />
              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                className="btn btn-success w-20 h-20 text-neutral text-xl font-bold m-0.5 rounded-lg"
                value="*"
              />
            </div>
            <div>
              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                className="btn btn-primary w-20 h-20 text-base-300 m-0.5 rounded-lg"
                value="4"
              />
              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                className="btn btn-primary w-20 h-20 text-base-300 m-0.5 rounded-lg"
                value="5"
              />
              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                className="btn btn-primary w-20 h-20 text-base-300 m-0.5 rounded-lg"
                value="6"
              />
              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                className="btn btn-success w-20 h-20 text-neutral text-xl font-bold m-0.5 rounded-lg"
                value="-"
              />
            </div>
            <div>
              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                className="btn btn-primary w-20 h-20 text-base-300 m-0.5 rounded-lg"
                value="1"
              />
              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                className="btn btn-primary w-20 h-20 text-base-300 m-0.5 rounded-lg"
                value="2"
              />
              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                className="btn btn-primary w-20 h-20 text-base-300 m-0.5 rounded-lg"
                value="3"
              />
              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                className="btn btn-success w-20 h-20 text-neutral text-xl font-bold m-0.5 rounded-lg"
                value="+"
              />
            </div>
            <div>
              <input
                onClick={() => setValue(Math.sqrt(value))}
                type="button"
                className="btn btn-primary w-20 h-20 text-base-300 m-0.5 rounded-lg"
                value="sq"
              />
              <input
                onClick={(e) => setValue(value + e.target.value)}
                type="button"
                className="btn btn-primary w-20 h-20 text-base-300 m-0.5 rounded-lg"
                value="0"
              />
              <input
                onClick={() => setValue(eval(value))}
                type="button"
                className="btn btn-success w-40 h-20 text-neutral text-xl font-bold m-0.5 rounded-lg"
                value="="
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
