import React from 'react';

const FullScreenLoader = () => {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center z-50">
            {/* Animated background pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            {/* Main loader container */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                {/* Animated spinner */}
                <div className="relative">
                    {/* Outer ring */}
                    <div className="w-24 h-24 border-4 border-blue-200 rounded-full"></div>
                    
                    {/* Middle ring */}
                    <div className="absolute top-0 left-0 w-24 h-24 border-4 border-transparent border-t-blue-400 rounded-full animate-spin"></div>
                    
                    {/* Inner ring */}
                    <div className="absolute top-2 left-2 w-20 h-20 border-4 border-transparent border-b-blue-500 rounded-full animate-spin animation-delay-500"></div>
                    
                    {/* Center dot */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
                    
                    {/* Pulse effect */}
                    <div className="absolute top-0 left-0 w-24 h-24 rounded-full animate-ping bg-blue-400 opacity-20"></div>
                </div>

                {/* Loading text */}
                <div className="mt-8 text-center">
                    <h2 className="text-xl font-bold text-blue-800 mb-2 animate-pulse">Loading</h2>
                    <div className="flex items-center justify-center space-x-1">
                        <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce animation-delay-150"></div>
                        <div className="h-2 w-2 bg-blue-700 rounded-full animate-bounce animation-delay-300"></div>
                    </div>
                    <p className="text-sm text-blue-600 mt-4">Please wait while we prepare your experience</p>
                </div>

                {/* Progress indicator */}
                <div className="mt-6 w-64 bg-blue-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full animate-progress"></div>
                </div>

                {/* Loading dots animation */}
                <div className="mt-4 flex space-x-1">
                    <div className="h-2 w-2 bg-blue-300 rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse animation-delay-200"></div>
                    <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse animation-delay-400"></div>
                    <div className="h-2 w-2 bg-blue-600 rounded-full animate-pulse animation-delay-600"></div>
                </div>
            </div>

            {/* Company/brand logo (optional) */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
                <div className="inline-flex items-center gap-2 text-blue-700 opacity-80">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg"></div>
                    <span className="text-sm font-medium">Loading Your Dashboard</span>
                </div>
            </div>

            {/* Custom animations CSS */}
            <style jsx>{`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                
                @keyframes progress {
                    0% {
                        width: 0%;
                    }
                    50% {
                        width: 70%;
                    }
                    100% {
                        width: 100%;
                    }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animate-progress {
                    animation: progress 2s ease-in-out infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                .animation-delay-500 {
                    animation-delay: 0.5s;
                }
                
                .animation-delay-150 {
                    animation-delay: 0.15s;
                }
                
                .animation-delay-300 {
                    animation-delay: 0.3s;
                }
                
                .animation-delay-600 {
                    animation-delay: 0.6s;
                }
            `}</style>
        </div>
    );
};

export default FullScreenLoader;

// import React from 'react';
// // localstorage, session, cookies  memories in browser to save login status
// const FullScreenLoader = () => {
//     return (
//         <div>
//             <div className ='fullscreen-loader'>
//                 <div className ='spinner'>
                    
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default FullScreenLoader;