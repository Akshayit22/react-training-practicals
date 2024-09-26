
function Button({text,Component,onclick,styles}:any) {
  return (
      <button
          onClick={onclick}
          className={`${styles} flex gap-1 bg-black text-white p-3 hover:bg-white hover:text-black transition-transform duration-1000 cursor-pointer rounded-full dark:border`}
      >
          <Component className="text-xl mt-1" /> {text}
      </button>
  )
}

export default Button