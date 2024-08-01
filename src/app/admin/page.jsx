import React from "react";

const page = () => {
  return (
    <main className="p-2">
      <header>
        <h1>Welcome to KMA Admin Dashboard</h1>
      </header>
      <section className="flex flex-col md:flex-row">
        <aside className="w-full">
          <div>
            <h5>At a glance</h5>
          </div>
          <div>
            <h5>Recent updates</h5>
          </div>
        </aside>
        <aside className="w-full md:w-2/6 flex flex-col items-end justify-end">
          <div>
            <h1>Recent Activity</h1>
          </div>
          <div>Quick actions</div>
        </aside>
      </section>
    </main>
  );
};

export default page;
