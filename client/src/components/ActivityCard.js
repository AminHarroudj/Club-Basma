export default function ActivityCard({title="null",children}){
    return(
        <div className="flex flex-col justify-center items-center text-center gap-8 bg-sky-200 bg-opacity-30 p-4 rounded-xl">
            <h1 className="text-3xl font-meduim">{title}</h1>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                {children}
            </div>
        </div>
    )
}