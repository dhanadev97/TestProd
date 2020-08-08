const Path=require('path');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
//const Path = require('path');
module.exports=(env)=>{
    const isProd=env==='Production';
    const CssExtract=new ExtractTextPlugin('style.css');
    return{
        entry:"./src/app.js",
        output:{
            path:Path.join(__dirname,'public'),
            filename:'bundle.js'
        },
        module:{
            rules:[
                {
                    loader:'babel-loader',
                    test:/\.js$/,
                    exclude:/node_modules/
                },
                {
                    test:/\.s?css$/,
                    use:CssExtract.extract({
                        use:[
                            "css-loader",
                            "sass-loader"
                            ]
                    })
                }
                // {
                //     test:/\.s?css$/,
                //     use:["style-loader","css-loader","sass-loader"]
                // }
                
            ]
        },
        plugins:[CssExtract],
        devServer:{
            contentBase:Path.join(__dirname,'public')
        },
    // devtool:"cheap-module-eval-source-map"
    devtool:isProd?"source-map":"cheap-module-eval-source-map"
 };
};
//console.log(Path.join(__dirname,'public'));