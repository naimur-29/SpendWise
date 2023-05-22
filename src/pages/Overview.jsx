export default function Overview() {
  return (
    <section className="w-full flex flex-col gap-[20px] md:w-[calc(100%-16rem)] bg-slate-900 min-h-screen p-[40px] text-white">
      <div className="heading bg-[#fff3]">
        <h3 className="text-2xl">Overview</h3>
      </div>

      {/* main card container */}
      <div className="card-container flex flex-col justify-between h-full gap-[20px]">
        {/* first row */}
        <div className="card-cols flex flex-col lg:flex-row justify-between flex-[1] gap-[20px]">
          <div className="card w-full flex-[1] bg-[#fff3] rounded-lg px-2 py-1"></div>
          <div className="card w-full flex-[1] bg-[#fff3] rounded-lg px-2 py-1"></div>
          <div className="card w-full flex-[1] bg-[#fff3] rounded-lg px-2 py-1 flex flex-col gap-1">
            <div className="heading">
              <h3>Latest Transactions</h3>
            </div>

            <div className="content flex flex-col gap-1">
              <div className="item flex justify-between bg-[#fff3]">
                <div className="left">
                  <p>Food</p>
                  <p>02/20/2023</p>
                </div>
                <div className="right">$1000</div>
              </div>

              <div className="item flex justify-between bg-[#fff3]">
                <div className="left">
                  <p>Food</p>
                  <p>02/20/2023</p>
                </div>
                <div className="right">$1000</div>
              </div>

              <div className="item flex justify-between bg-[#fff3]">
                <div className="left">
                  <p>Food</p>
                  <p>02/20/2023</p>
                </div>
                <div className="right">$1000</div>
              </div>
            </div>
          </div>
        </div>

        {/* second row container */}
        <div className="card-cols flex flex-col lg:flex-row justify-between flex-[2] gap-[20px]">
          {/* first col */}
          <div className="card-cols flex flex-col justify-between flex-[1] gap-[20px]">
            <div className="card w-full flex-[8] bg-[#fff3] rounded-lg"></div>
            <div className="card w-full flex-[6] bg-[#fff3] rounded-lg"></div>
          </div>

          {/* second col */}
          <div className="card-cols flex flex-col justify-between flex-[1] gap-[20px]">
            <div className="card w-full flex-[8] bg-[#fff3] rounded-lg"></div>
            <div className="card w-full flex-[6] bg-[#fff3] rounded-lg"></div>
          </div>

          {/* third col */}
          <div className="card-cols flex flex-col justify-between flex-[1] gap-[20px]">
            <div className="card w-full flex-[1] bg-[#fff3] rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
