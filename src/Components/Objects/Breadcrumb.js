
import { useEffect, useState, React } from 'react'
// import { useLocation } from 'react-router-dom'




const Breadcrumb = (props) => {

    const [linkHistory, setLink] = useState([])

    useEffect(
        () => {

            setLink(props.children)

        }, [props.children]
    );




    return (<>

        <nav className="breadcrumb-container" aria-label="breadcrumb">
            <ol className="breadcrumb">




                {linkHistory.map(x =>
                    <p key={x.page}>
                        {
                            <>
                                {x.active ? <li  className={"breadcrumb-item active"}>
                                    <a >{x.page}</a>
                                </li> : <li className={"breadcrumb-item "}>
                                        <a href={"/" + x.page} >{x.page}</a>
                                        <span className="separator">/</span>
                                    </li>}
                            </>
                        }
                    </p>
                )}








            </ol>
        </nav>


    </>)
}

export default Breadcrumb







