import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <main className="bg-slate-50 h-screen">
      <h1 className="p-6 text-lg md:text-2xl font-bold flex justify-center border-b-2">
        Contact Manager App
      </h1>
      <div className="max-w-2xl mx-auto px-5 ">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default Layout;
