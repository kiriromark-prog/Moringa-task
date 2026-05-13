


  


const LoginPage = () => {


  return (
    <div className="flex min-h-screen">
{/* Left Panel: White Branding & Form */}
      <div className="flex flex-1 flex-col items-center justify-center bg-[#f8f9ff] px-8">
        <div className="w-full max-w-md">
{/* Logo & Header */}
          <div className="mb-8 flex items-center gap-2">
            <h1 className="text-3xl font-bold text-slate-800 underline hover:text-indigo-500">MoringaTaskFlow</h1>
          </div>

{/*login and signup form */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Welcome Back</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="student@moringa.com" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="••••••••" />
              </div>
              <div className="flex items-center justify-between">
                <button className="w-40 rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700">Log In</button>
                <button className="w-40  rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>


{/* Right Panel: Purple Features (Hidden on small screens) */}
      <div className="hidden flex-1 flex-col justify-center bg-indigo-600 p-16 text-white lg:flex">
        <h2 className="mb-4 text-4xl font-bold">Stay Organized, Stay Ahead</h2>
        <p className="mb-12 text-lg text-indigo-100 opacity-80">Centralize your workload and never miss a deadline again.</p>
        
        <div className="space-y-6">
          <FeatureItem title="Task Management" desc="Create and complete tasks with ease." />
          <FeatureItem title="Calendar View" desc="Visualize deadlines in one place." />
          <FeatureItem title="Progress Tracking" desc="Monitor your academic progress." />
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ title, desc }) => (
  <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
    <h3 className="font-bold">{title}</h3>
    <p className="text-sm text-indigo">{desc}</p>
  </div>
);

export default LoginPage;
