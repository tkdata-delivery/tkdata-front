import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/anse');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-0 mt-16 sm:mt-0">
      <div className="w-full sm:w-[700px] h-auto sm:h-[600px] bg-white rounded-xl p-8 sm:p-12 border-2 border-white sm:ml-[-400px]">
        <h1 className="text-3xl font-bold text-center text-black-500 mb-10">
          Connectez-vous
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-3">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@gmail.com"
              className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-3">
              Mot de passe
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="****************"
              className="w-full px-5 py-4 pr-14 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
            />
            
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-[64%] transform -translate-y-1/2"
            >
              <div className="relative h-6 w-6">
                <div
                  className={`absolute inset-0 flex items-center justify-center ${showPassword ? "opacity-0" : "opacity-100"} transition-opacity`}
                >
                </div>
              </div>
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <p className="text-base text-black">Mot de passe oublié ?</p>
              <a href="#" className="text-base text-indigo-600 hover:underline font-medium">
                Récupérez-le
              </a>
            </div>
          </div>

          <button  
            type="submit"
            style={{ backgroundColor: 'rgba(160, 118, 249, 1)' }}
            className="w-full py-4 text-white text-lg font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Connectez-vous
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
