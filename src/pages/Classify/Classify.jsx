import React from "react"
import "./index.styl"
import {connect} from "react-redux"
import {Link} from 'react-router-dom'
import {reqCategoryData} from "./../../store/actions"

class Classify extends React.Component {




    componentDidMount(){
        this.props.reqCategoryData()
    }

    listId=()=>{
        const path = this.props.location.search;
        const id = path.substring(4,path.length);
        return id
    };

    render() {
        const {category} = this.props;
        const id = this.listId();
        const list = category.filter((cate)=>{
            return cate.id == id
        });

        return (
            <div className="wrap2">
                <div className="header">
                    <div className="sreachInput">
                        <i></i>
                        <span>搜索商品,共19932款好物</span>
                    </div>
                </div>

                <div className="minWrap">
                    <div className="left">
                        <ul>
                            {
                                category ? category.map((cate,index) => (
                                    <li key={index} className={cate.id == id ? "on" : null}>
                                        <Link to={`/classify?id=${cate.id}`}>
                                            {cate.name}
                                        </Link>
                                    </li>
                                )) : null
                            }
                        </ul>
                    </div>
                    <div className="right">
                        <div className="up">
                            {
                                list[0] ? (<img src={list[0].bannerUrl} alt=""/>) : null
                            }
                        </div>
                        {
                            list[0] ? (
                                list[0].subCateList.length >= 10 ? (
                                    <ul className="down">
                                        {
                                            list[0].subCateList.map((item,index) => (
                                                <li key={index}>
                                                    <a href={`http://m.you.163.com/item/list?categoryId=${item.id-1-index}&subCategoryId=${item.id}`}>
                                                        <img src={item.bannerUrl} alt=""/>
                                                        <span>{item.name}</span>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                ) : (
                                    <ul className="down2">
                                        {
                                            list[0].subCateList.map((item,index)=>(
                                                <li key={index}>
                                                    <span>{item.name}</span>
                                                    <ul>
                                                        {
                                                            item.categoryList.map((catex,index)=>(
                                                                <li key={index}>
                                                                    <a href={`http://m.you.163.com/item/list?categoryId=${catex.superCategoryId}&subCategoryId=${catex.id}`}>
                                                                        <img src={catex.wapBannerUrl} alt=""/>
                                                                        <span>{catex.name}</span>
                                                                    </a>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            ) : null
                        }

                    </div>
                </div>

            </div>
        )
    }

}

export default connect(
    state => ({
        category : state.categoryData
    }),
    {reqCategoryData}
)(Classify)
