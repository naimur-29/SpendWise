export default function Overview() {
  return (
    <section className="flex min-h-screen w-full flex-col gap-[20px] bg-slate-900 p-[40px] text-white md:w-[calc(100%-16rem)]">
      <div className="heading bg-[#fff3]">
        <h3 className="text-2xl">Overview</h3>
      </div>

      {/* main card container */}
      <div className="card-container flex h-full flex-col justify-between gap-[20px]">
        {/* first row */}
        <div className="card-cols flex flex-[1] flex-col justify-between gap-[20px] lg:flex-row">
          <div className="card w-full flex-[1] rounded-lg bg-[#fff3] px-2 py-1"></div>
          <div className="card w-full flex-[1] rounded-lg bg-[#fff3] px-2 py-1"></div>
          <div className="card flex w-full flex-[1] flex-col gap-1 rounded-lg bg-[#fff3] px-2 py-1">
            <div className="heading">
              <h3>Latest Transactions</h3>
            </div>

            <div className="flex flex-col gap-1 content">
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
        <div className="card-cols flex flex-[2] flex-col justify-between gap-[20px] lg:flex-row">
          {/* first col */}
          <div className="card-cols flex flex-[1] flex-col justify-between gap-[20px]">
            <div className="card w-full flex-[8] rounded-lg bg-[#fff3]"></div>
            <div className="card w-full flex-[6] rounded-lg bg-[#fff3]"></div>
          </div>

          {/* second col */}
          <div className="card-cols flex flex-[1] flex-col justify-between gap-[20px]">
            <div className="card w-full flex-[8] rounded-lg bg-[#fff3]"></div>
            <div className="card w-full flex-[6] rounded-lg bg-[#fff3]"></div>
          </div>

          {/* third col */}
          <div className="card-cols flex flex-[1] flex-col justify-between gap-[20px]">
            <div className="card w-full flex-[1] rounded-lg bg-[#fff3]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
