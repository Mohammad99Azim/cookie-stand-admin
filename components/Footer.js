

export default function Footer(data){
    return(
        <>
            <div className="flex items-center w-full h-12 pl-5 bg-green-600">
                <p>{data["data"].length} Location World Wide</p>
            </div>

        </>
    )
}
