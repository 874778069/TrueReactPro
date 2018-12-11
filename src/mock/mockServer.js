import Mock from "mockjs"
import msite from "./msite.json"
import category from "./category.json"
import shiwu from "./shiwu.json"
import New from "./new.json"
import daren from "./daren.json"
import home from "./home.json"


Mock.mock("/msite",{code:0,data : msite});
Mock.mock("/classify",{code:0,data : category});
Mock.mock("/shiwu",{code:0,data : shiwu});
Mock.mock("/shiwu/new",{code:0,data : New.data.result});
Mock.mock("/shiwu/daren",{code:0,data : daren.data.result});
Mock.mock("/shiwu/home",{code:0,data : home.data.result});

