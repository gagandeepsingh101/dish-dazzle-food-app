import toast from "react-hot-toast";

// Design Notification UI and then show it
export const showToast = (noticationMessage) => {
    toast.success(noticationMessage,{
        duration: 1000,
        style: {
            borderRadius: '10px',
            background: 'rgb(30 58 138)',
            color: '#fff',
        },
        iconTheme:{
            secondary: 'rgb(30 58 138)',
            primary: '#fff',
        }
    });
};


