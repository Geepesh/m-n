
const express = require('express')
const app = express()
const port = 3000 || process.env.PORT;
const bp = require('body-parser')
const mongoose = require('mongoose')
const DATA = require("./db/db")
require('dotenv').config()
app.use(bp.urlencoded({
    extended : false
}))
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://"+process.env.ID+":"+process.env.IDPASS+"@cluster0.n8viw.mongodb.net/order-form?retryWrites=true&w=majority", {

    useUnifiedTopology: true,

    useNewUrlParser: true,

}).then(()=>{
  console.log('connected')
})


app.set('view engine','ejs')

app.get('/',(req,res)=>{
  res.render('info')
})

app.post('/',(req,res)=>{
  let name = req.body.name;
  let phone = req.body.phone;
  let city = req.body.city;
  res.render('new',{
    name : name,
    phone : phone,
    city : city
  })
})


app.post('/admin',(req,res)=>{

  DATA.find({}).then(data=>{
    if(Object.keys(data).length > 0){
      if(req.body.pass === process.env.PASS){
    res.render('admin',{
      data : data
    })
  }else{
    res.send('wrong pass')
  }
  }else{
    res.render('no_data')
  }
  })
  })

app.post('/order_placed',(req,res)=>{

  let name = req.body.name;
  let city = req.body.city;
  let phone = req.body.phone;
    let pa_9_eng = req.body.pa_9_eng;
    let pa_9_hin = req.body.pa_9_hin;
    let pa_9_sst = req.body.pa_9_sst;
    let pa_9_sc = req.body.pa_9_sc;
    let pa_9_maths = req.body.pa_9_maths;
    let pa_9_skt = req.body.pa_9_skt;

    let pa_10_eng = req.body.pa_10_eng;
    let pa_10_hin = req.body.pa_10_hin;
    let pa_10_sst = req.body.pa_10_sst;
    let pa_10_sc = req.body.pa_10_sc;
    let pa_10_maths = req.body.pa_10_maths;
    let pa_10_skt = req.body.pa_10_skt;

    let pa_11_eng = req.body.pa_11_eng;
    let pa_11_hin = req.body.pa_11_hin;
    let pa_11_phy = req.body.pa_11_phy;
    let pa_11_chem = req.body.pa_11_chem;
    let pa_11_bio = req.body.pa_11_bio;
    let pa_11_socio = req.body.pa_11_socio;
    let pa_11_ps = req.body.pa_11_ps;
    let pa_11_his = req.body.pa_11_his;
    let pa_11_geo = req.body.pa_11_geo;
    let pa_11_eco = req.body.pa_11_eco;
    let pa_11_maths = req.body.pa_11_maths;
    let pa_11_krashi = req.body.pa_11_krashi;
    let pa_11_pashu = req.body.pa_11_pashu;
    let pa_11_fasal = req.body.pa_11_fasal;

    let pa_12_eng = req.body.pa_12_eng;
    let pa_12_hin = req.body.pa_12_hin;
    let pa_12_phy = req.body.pa_12_phy;
    let pa_12_chem = req.body.pa_12_chem;
    let pa_12_bio = req.body.pa_12_bio;
    let pa_12_socio = req.body.pa_12_socio;
    let pa_12_ps = req.body.pa_12_ps;
    let pa_12_his = req.body.pa_12_his;
    let pa_12_geo = req.body.pa_12_geo;
    let pa_12_eco = req.body.pa_12_eco;
    let pa_12_maths = req.body.pa_12_maths;
    let pa_12_krashi = req.body.pa_12_krashi;
    let pa_12_pashu = req.body.pa_12_pashu;
    let pa_12_fasal = req.body.pa_12_fasal;

    let pb_9_eng = req.body.pb_9_eng;
    let pb_9_hin = req.body.pb_9_hin;
    let pb_9_sst = req.body.pb_9_sst;
    let pb_9_sc = req.body.pb_9_sc;
    let pb_9_maths = req.body.pb_9_maths;
    let pb_9_skt = req.body.pb_9_skt;

    let pb_10_eng = req.body.pb_10_eng;
    let pb_10_hin = req.body.pb_10_hin;
    let pb_10_sst = req.body.pb_10_sst;
    let pb_10_sc = req.body.pb_10_sc;
    let pb_10_maths = req.body.pb_10_maths;
    let pb_10_skt = req.body.pb_10_skt;

    let pb_11_eng = req.body.pb_11_eng;
    let pb_11_hin = req.body.pb_11_hin;
    let pb_11_phy = req.body.pb_11_phy;
    let pb_11_chem = req.body.pb_11_chem;
    let pb_11_bio = req.body.pb_11_bio;
    let pb_11_socio = req.body.pb_11_socio;
    let pb_11_ps = req.body.pb_11_ps;
    let pb_11_his = req.body.pb_11_his;
    let pb_11_geo = req.body.pb_11_geo;
    let pb_11_eco = req.body.pb_11_eco;
    let pb_11_maths = req.body.pb_11_maths;
    let pb_11_krashi = req.body.pb_11_krashi;
    let pb_11_pbshu = req.body.pb_11_pbshu;
    let pb_11_fasal = req.body.pb_11_fasal;

    let pb_12_eng = req.body.pb_12_eng;
    let pb_12_hin = req.body.pb_12_hin;
    let pb_12_phy = req.body.pb_12_phy;
    let pb_12_chem = req.body.pb_12_chem;
    let pb_12_bio = req.body.pb_12_bio;
    let pb_12_socio = req.body.pb_12_socio;
    let pb_12_ps = req.body.pb_12_ps;
    let pb_12_his = req.body.pb_12_his;
    let pb_12_geo = req.body.pb_12_geo;
    let pb_12_eco = req.body.pb_12_eco;
    let pb_12_maths = req.body.pb_12_maths;
    let pb_12_krashi = req.body.pb_12_krashi;
    let pb_12_pbshu = req.body.pb_12_pbshu;
    let pb_12_fasal = req.body.pb_12_fasal;

    let dig_9_eng = req.body.dig_9_eng;
    let dig_9_hin = req.body.dig_9_hin;
    let dig_9_sst = req.body.dig_9_sst;
    let dig_9_sc = req.body.dig_9_sc;
    let dig_9_maths = req.body.dig_9_maths;
    let dig_9_skt = req.body.dig_9_skt;

    let dig_10_eng = req.body.dig_10_eng;
    let dig_10_hin = req.body.dig_10_hin;
    let dig_10_sst = req.body.dig_10_sst;
    let dig_10_sc = req.body.dig_10_sc;
    let dig_10_maths = req.body.dig_10_maths;
    let dig_10_skt = req.body.dig_10_skt;

    let dig_11_eng = req.body.dig_11_eng;
    let dig_11_hin = req.body.dig_11_hin;
    let dig_11_phy = req.body.dig_11_phy;
    let dig_11_chem = req.body.dig_11_chem;
    let dig_11_bio = req.body.dig_11_bio;
    let dig_11_socio = req.body.dig_11_socio;
    let dig_11_ps = req.body.dig_11_ps;
    let dig_11_his = req.body.dig_11_his;
    let dig_11_geo = req.body.dig_11_geo;
    let dig_11_eco = req.body.dig_11_eco;
    let dig_11_maths = req.body.dig_11_maths;
    let dig_11_krashi = req.body.dig_11_krashi;
    let dig_11_digshu = req.body.dig_11_digshu;
    let dig_11_fasal = req.body.dig_11_fasal;

    let dig_12_eng = req.body.dig_12_eng;
    let dig_12_hin = req.body.dig_12_hin;
    let dig_12_phy = req.body.dig_12_phy;
    let dig_12_chem = req.body.dig_12_chem;
    let dig_12_bio = req.body.dig_12_bio;
    let dig_12_socio = req.body.dig_12_socio;
    let dig_12_ps = req.body.dig_12_ps;
    let dig_12_his = req.body.dig_12_his;
    let dig_12_geo = req.body.dig_12_geo;
    let dig_12_eco = req.body.dig_12_eco;
    let dig_12_maths = req.body.dig_12_maths;
    let dig_12_krashi = req.body.dig_12_krashi;
    let dig_12_digshu = req.body.dig_12_digshu;
    let dig_12_fasal = req.body.dig_12_fasal;

    let shivlal_guide_3 = req.body.shivlal_guide_3;
    let shivlal_guide_4 = req.body.shivlal_guide_4;
    let shivlal_guide_5 = req.body.shivlal_guide_5;
    let shivlal_guide_6 = req.body.shivlal_guide_6;
    let shivlal_guide_7 = req.body.shivlal_guide_7;
    let shivlal_guide_8 = req.body.shivlal_guide_8;

    let shivlal_guide_9 = req.body.shivlal_guide_9;
    let shivlal_guide_10 = req.body.shivlal_guide_10;


    let keshav_guide_3 = req.body.keshav_guide_3;
    let keshav_guide_4 = req.body.keshav_guide_4;
    let keshav_guide_5 = req.body.keshav_guide_5;
    let keshav_guide_6 = req.body.keshav_guide_6;
    let keshav_guide_7 = req.body.keshav_guide_7;
    let keshav_guide_8 = req.body.keshav_guide_8;

    let keshav_guide_9 = req.body.keshav_guide_9;
    let keshav_guide_10 = req.body.keshav_guide_10;
    

    let shivlal_project_9_eng = req.body.shivlal_project_9_eng;
    let shivlal_project_9_hin = req.body.shivlal_project_9_hin;
    let shivlal_project_9_sst = req.body.shivlal_project_9_sst;
    let shivlal_project_9_sc = req.body.shivlal_project_9_sc;
    let shivlal_project_9_maths = req.body.shivlal_project_9_maths;
    let shivlal_project_9_skt = req.body.shivlal_project_9_skt;

    let shivlal_project_10_eng = req.body.shivlal_project_10_eng;
    let shivlal_project_10_hin = req.body.shivlal_project_10_hin;
    let shivlal_project_10_sst = req.body.shivlal_project_10_sst;
    let shivlal_project_10_sc = req.body.shivlal_project_10_sc;
    let shivlal_project_10_maths = req.body.shivlal_project_10_maths;
    let shivlal_project_10_skt = req.body.shivlal_project_10_skt;

    let mn_project_9_eng = req.body.mn_project_9_eng;
    let mn_project_9_hin = req.body.mn_project_9_hin;
    let mn_project_9_sst = req.body.mn_project_9_sst;
    let mn_project_9_sc = req.body.mn_project_9_sc;
    let mn_project_9_maths = req.body.mn_project_9_maths;
    let mn_project_9_skt = req.body.mn_project_9_skt;

    let mn_project_10_eng = req.body.mn_project_10_eng;
    let mn_project_10_hin = req.body.mn_project_10_hin;
    let mn_project_10_sst = req.body.mn_project_10_sst;
    let mn_project_10_sc = req.body.mn_project_10_sc;
    let mn_project_10_maths = req.body.mn_project_10_maths;
    let mn_project_10_skt = req.body.mn_project_10_skt;
        

    let shivlal_project_11_eng = req.body.shivlal_project_11_eng;
    let shivlal_project_11_hin = req.body.shivlal_project_11_hin;
    let shivlal_project_11_phy = req.body.shivlal_project_11_phy;
    let shivlal_project_11_chem = req.body.shivlal_project_11_chem;
    let shivlal_project_11_bio = req.body.shivlal_project_11_bio;
    let shivlal_project_11_socio = req.body.shivlal_project_11_socio;
    let shivlal_project_11_ps = req.body.shivlal_project_11_ps;
    let shivlal_project_11_his = req.body.shivlal_project_11_his;
    let shivlal_project_11_geo = req.body.shivlal_project_11_geo;
    let shivlal_project_11_eco = req.body.shivlal_project_11_eco;
    let shivlal_project_11_maths = req.body.shivlal_project_11_maths;
    let shivlal_project_11_krashi = req.body.shivlal_project_11_krashi;
    let shivlal_project_11_shivlal_projectshu = req.body.shivlal_project_11_shivlal_projectshu;
    let shivlal_project_11_fasal = req.body.shivlal_project_11_fasal;

    let shivlal_project_12_eng = req.body.shivlal_project_12_eng;
    let shivlal_project_12_hin = req.body.shivlal_project_12_hin;
    let shivlal_project_12_phy = req.body.shivlal_project_12_phy;
    let shivlal_project_12_chem = req.body.shivlal_project_12_chem;
    let shivlal_project_12_bio = req.body.shivlal_project_12_bio;
    let shivlal_project_12_socio = req.body.shivlal_project_12_socio;
    let shivlal_project_12_ps = req.body.shivlal_project_12_ps;
    let shivlal_project_12_his = req.body.shivlal_project_12_his;
    let shivlal_project_12_geo = req.body.shivlal_project_12_geo;
    let shivlal_project_12_eco = req.body.shivlal_project_12_eco;
    let shivlal_project_12_maths = req.body.shivlal_project_12_maths;
    let shivlal_project_12_krashi = req.body.shivlal_project_12_krashi;
    let shivlal_project_12_shivlal_projectshu = req.body.shivlal_project_12_shivlal_projectshu;
    let shivlal_project_12_fasal = req.body.shivlal_project_12_fasal;
    let navbodh_practicle_9 = req.body.navbodh_practicle_9;

    let navbodh_practicle_10= req.body.navbodh_practicle_10;


    let navbodh_practicle_11_phy = req.body.navbodh_practicle_11_phy;
    let navbodh_practicle_11_chem = req.body.navbodh_practicle_11_chem;
    let navbodh_practicle_11_bio = req.body.navbodh_practicle_11_bio;
    let navbodh_practicle_12_phy = req.body.navbodh_practicle_12_phy;
    let navbodh_practicle_12_chem = req.body.navbodh_practicle_12_chem;
    let navbodh_practicle_12_bio = req.body.navbodh_practicle_12_bio;
    
    const data = new DATA({
      name : name,
      city : city,
      phone : phone,
      pa_9_sst : pa_9_sst,
      pa_9_sc : pa_9_sc,
      pa_9_maths : pa_9_maths,
      pa_9_eng : pa_9_eng,
      pa_9_hin : pa_9_hin,
      pa_9_skt : pa_9_skt,
      pa_10_sst : pa_10_sst,
      pa_10_sc : pa_10_sc,
      pa_10_maths : pa_10_maths,
      pa_10_eng : pa_10_eng,
      pa_10_hin : pa_10_hin,
      pa_10_skt : pa_10_skt,
      pa_11_eng :pa_11_eng,
      pa_11_hin : pa_11_hin,
      pa_11_phy : pa_11_phy,
      pa_11_chem : pa_11_chem,
      pa_11_bio : pa_11_bio,
      pa_11_socio : pa_11_socio,
      pa_11_ps : pa_11_ps,
      pa_11_his : pa_11_his,
      pa_11_geo : pa_11_geo,
      pa_11_eco : pa_11_eco,
      pa_11_maths : pa_11_maths,
      pa_11_krashi : pa_11_krashi,
      pa_11_pashu : pa_11_pashu,
      pa_11_fasal : pa_11_fasal,
      pa_12_eng :pa_12_eng,
      pa_12_hin : pa_12_hin,
      pa_12_phy : pa_12_phy,
      pa_12_chem : pa_12_chem,
      pa_12_bio : pa_12_bio,
      pa_12_socio : pa_12_socio,
      pa_12_ps : pa_12_ps,
      pa_12_his : pa_12_his,
      pa_12_geo : pa_12_geo,
      pa_12_eco : pa_12_eco,
      pa_12_maths : pa_12_maths,
      pa_12_krashi : pa_12_krashi,
      pa_12_pashu : pa_12_pashu,
      pa_12_fasal : pa_12_fasal,
      pb_9_sst : pb_9_sst,
        pb_9_sc : pb_9_sc,
        pb_9_maths : pb_9_maths,
        pb_9_eng : pb_9_eng,
        pb_9_hin : pb_9_hin,
        pb_9_skt : pb_9_skt,
        pb_10_sst : pb_10_sst,
        pb_10_sc : pb_10_sc,
        pb_10_maths : pb_10_maths,
        pb_10_eng : pb_10_eng,
        pb_10_hin : pb_10_hin,
        pb_10_skt : pb_10_skt,
        pb_11_eng :pb_11_eng,
        pb_11_hin : pb_11_hin,
        pb_11_phy : pb_11_phy,
        pb_11_chem : pb_11_chem,
        pb_11_bio : pb_11_bio,
        pb_11_socio : pb_11_socio,
        pb_11_ps : pb_11_ps,
        pb_11_his : pb_11_his,
        pb_11_geo : pb_11_geo,
        pb_11_eco : pb_11_eco,
        pb_11_maths : pb_11_maths,
        pb_11_krashi : pb_11_krashi,
        pb_11_pbshu : pb_11_pbshu,
        pb_11_fasal : pb_11_fasal,
        pb_12_eng :pb_12_eng,
        pb_12_hin : pb_12_hin,
        pb_12_phy : pb_12_phy,
        pb_12_chem : pb_12_chem,
        pb_12_bio : pb_12_bio,
        pb_12_socio : pb_12_socio,
        pb_12_ps : pb_12_ps,
        pb_12_his : pb_12_his,
        pb_12_geo : pb_12_geo,
        pb_12_eco : pb_12_eco,
        pb_12_maths : pb_12_maths,
        pb_12_krashi : pb_12_krashi,
        pb_12_pbshu : pb_12_pbshu,
        pb_12_fasal : pb_12_fasal,
        dig_9_sst : dig_9_sst,
        dig_9_sc : dig_9_sc,
        dig_9_maths : dig_9_maths,
        dig_9_eng : dig_9_eng,
        dig_9_hin : dig_9_hin,
        dig_9_skt : dig_9_skt,
        dig_10_sst : dig_10_sst,
        dig_10_sc : dig_10_sc,
        dig_10_maths : dig_10_maths,
        dig_10_eng : dig_10_eng,
        dig_10_hin : dig_10_hin,
        dig_10_skt : dig_10_skt,
        dig_11_eng :dig_11_eng,
        dig_11_hin : dig_11_hin,
        dig_11_phy : dig_11_phy,
        dig_11_chem : dig_11_chem,
        dig_11_bio : dig_11_bio,
        dig_11_socio : dig_11_socio,
        dig_11_ps : dig_11_ps,
        dig_11_his : dig_11_his,
        dig_11_geo : dig_11_geo,
        dig_11_eco : dig_11_eco,
        dig_11_maths : dig_11_maths,
        dig_11_krashi : dig_11_krashi,
        dig_11_digshu : dig_11_digshu,
        dig_11_fasal : dig_11_fasal,
        dig_12_eng :dig_12_eng,
        dig_12_hin : dig_12_hin,
        dig_12_phy : dig_12_phy,
        dig_12_chem : dig_12_chem,
        dig_12_bio : dig_12_bio,
        dig_12_socio : dig_12_socio,
        dig_12_ps : dig_12_ps,
        dig_12_his : dig_12_his,
        dig_12_geo : dig_12_geo,
        dig_12_eco : dig_12_eco,
        dig_12_maths : dig_12_maths,
        dig_12_krashi : dig_12_krashi,
        dig_12_digshu : dig_12_digshu,
        dig_12_fasal : dig_12_fasal,
        shivlal_project_9_sst : shivlal_project_9_sst,
        shivlal_project_9_sc : shivlal_project_9_sc,
        shivlal_project_9_maths : shivlal_project_9_maths,
        shivlal_project_9_eng : shivlal_project_9_eng,
        shivlal_project_9_hin : shivlal_project_9_hin,
        shivlal_project_9_skt : shivlal_project_9_skt,
        shivlal_project_10_sst : shivlal_project_10_sst,
        shivlal_project_10_sc : shivlal_project_10_sc,
        shivlal_project_10_maths : shivlal_project_10_maths,
        shivlal_project_10_eng : shivlal_project_10_eng,
        shivlal_project_10_hin : shivlal_project_10_hin,
        shivlal_project_10_skt : shivlal_project_10_skt,
        shivlal_project_11_eng :shivlal_project_11_eng,
        shivlal_project_11_hin : shivlal_project_11_hin,
        shivlal_project_11_phy : shivlal_project_11_phy,
        shivlal_project_11_chem : shivlal_project_11_chem,
        shivlal_project_11_bio : shivlal_project_11_bio,
        shivlal_project_11_socio : shivlal_project_11_socio,
        shivlal_project_11_ps : shivlal_project_11_ps,
        shivlal_project_11_his : shivlal_project_11_his,
        shivlal_project_11_geo : shivlal_project_11_geo,
        shivlal_project_11_eco : shivlal_project_11_eco,
        shivlal_project_11_maths : shivlal_project_11_maths,
        shivlal_project_11_krashi : shivlal_project_11_krashi,
        shivlal_project_11_shivlal_projectshu : shivlal_project_11_shivlal_projectshu,
        shivlal_project_11_fasal : shivlal_project_11_fasal,
        shivlal_project_12_eng :shivlal_project_12_eng,
        shivlal_project_12_hin : shivlal_project_12_hin,
        shivlal_project_12_phy : shivlal_project_12_phy,
        shivlal_project_12_chem : shivlal_project_12_chem,
        shivlal_project_12_bio : shivlal_project_12_bio,
        shivlal_project_12_socio : shivlal_project_12_socio,
        shivlal_project_12_ps : shivlal_project_12_ps,
        shivlal_project_12_his : shivlal_project_12_his,
        shivlal_project_12_geo : shivlal_project_12_geo,
        shivlal_project_12_eco : shivlal_project_12_eco,
        shivlal_project_12_maths : shivlal_project_12_maths,
        shivlal_project_12_krashi : shivlal_project_12_krashi,
        shivlal_project_12_shivlal_projectshu : shivlal_project_12_shivlal_projectshu,
        shivlal_project_12_fasal : shivlal_project_12_fasal,
        mn_project_9_sst : mn_project_9_sst,
        mn_project_9_sc : mn_project_9_sc,
        mn_project_9_maths : mn_project_9_maths,
        mn_project_9_eng : mn_project_9_eng,
        mn_project_9_hin : mn_project_9_hin,
        mn_project_9_skt : mn_project_9_skt,
        mn_project_10_sst : mn_project_10_sst,
        mn_project_10_sc : mn_project_10_sc,
        mn_project_10_maths : mn_project_10_maths,
        mn_project_10_eng : mn_project_10_eng,
        mn_project_10_hin : mn_project_10_hin,
        mn_project_10_skt : mn_project_10_skt,
        shivlal_guide_3 : shivlal_guide_3,
        shivlal_guide_4 : shivlal_guide_4,
        shivlal_guide_5 : shivlal_guide_5,
        shivlal_guide_6 : shivlal_guide_6,
        shivlal_guide_7 : shivlal_guide_7,
        shivlal_guide_8 : shivlal_guide_8,
        shivlal_guide_9 : shivlal_guide_9,
        shivlal_guide_10 : shivlal_guide_10,
        keshav_guide_3 : keshav_guide_3,
        keshav_guide_4 : keshav_guide_4,
        keshav_guide_5 : keshav_guide_5,
        keshav_guide_6 : keshav_guide_6,
        keshav_guide_7 : keshav_guide_7,
        keshav_guide_8 : keshav_guide_8,
        keshav_guide_9 : keshav_guide_9,
        keshav_guide_10 : keshav_guide_10,
        navbodh_practicle_9 : navbodh_practicle_9,
        navbodh_practicle_10 : navbodh_practicle_10,
        navbodh_practicle_11_phy : navbodh_practicle_11_phy,
        navbodh_practicle_11_bio : navbodh_practicle_11_bio,
        navbodh_practicle_11_chem : navbodh_practicle_11_chem,
        navbodh_practicle_12_phy : navbodh_practicle_12_phy,
        navbodh_practicle_12_bio : navbodh_practicle_12_bio,
        navbodh_practicle_12_chem : navbodh_practicle_12_chem   
    })

    data.save().then(()=>{
      console.log('data saved')

    })
    res.render('success',{
      name : name
    })
    
})



app.get('/delete_:id',(req,res)=>{
  DATA.findById(req.params.id).then(doc=>{
    console.log(doc.name)
    
    
    
  }).then(()=>{
    DATA.deleteOne({_id : req.params.id}).then(()=>{
      res.redirect('/admin')
    })
  })
  
})

app.get("/admin",(req,res)=>{
  res.render('pass')
})

app.get('/success',(req,res)=>{
  res.render('success')
})

app.listen(port,() =>{
  console.log(port)
})
