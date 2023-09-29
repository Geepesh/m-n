const mongoose = require('mongoose');
const pa_Schema = new mongoose.Schema({
  name : String,
  city : String,
  phone : Number,
        pa_9_sst : Number,
        pa_9_sc : Number,
        pa_9_maths : Number,
        pa_9_eng : Number,
        pa_9_hin : Number,
        pa_9_skt : Number,
        pa_10_sst : Number,
        pa_10_sc : Number,
        pa_10_maths : Number,
        pa_10_eng : Number,
        pa_10_hin : Number,
        pa_10_skt : Number,
        pa_11_eng :Number,
        pa_11_hin : Number,
        pa_11_phy : Number,
        pa_11_chem : Number,
        pa_11_bio : Number,
        pa_11_socio : Number,
        pa_11_ps : Number,
        pa_11_his : Number,
        pa_11_geo : Number,
        pa_11_eco : Number,
        pa_11_maths : Number,
        pa_11_krashi : Number,
        pa_11_pashu : Number,
        pa_11_fasal : Number,
        pa_12_eng :Number,
        pa_12_hin : Number,
        pa_12_phy : Number,
        pa_12_chem : Number,
        pa_12_bio : Number,
        pa_12_socio : Number,
        pa_12_ps : Number,
        pa_12_his : Number,
        pa_12_geo : Number,
        pa_12_eco : Number,
        pa_12_maths : Number,
        pa_12_krashi : Number,
        pa_12_pashu : Number,
        pa_12_fasal : Number,
        pb_9_sst : Number,
        pb_9_sc : Number,
        pb_9_maths : Number,
        pb_9_eng : Number,
        pb_9_hin : Number,
        pb_9_skt : Number,
        pb_10_sst : Number,
        pb_10_sc : Number,
        pb_10_maths : Number,
        pb_10_eng : Number,
        pb_10_hin : Number,
        pb_10_skt : Number,
        pb_11_eng :Number,
        pb_11_hin : Number,
        pb_11_phy : Number,
        pb_11_chem : Number,
        pb_11_bio : Number,
        pb_11_socio : Number,
        pb_11_ps : Number,
        pb_11_his : Number,
        pb_11_geo : Number,
        pb_11_eco : Number,
        pb_11_maths : Number,
        pb_11_krashi : Number,
        pb_11_pbshu : Number,
        pb_11_fasal : Number,
        pb_12_eng :Number,
        pb_12_hin : Number,
        pb_12_phy : Number,
        pb_12_chem : Number,
        pb_12_bio : Number,
        pb_12_socio : Number,
        pb_12_ps : Number,
        pb_12_his : Number,
        pb_12_geo : Number,
        pb_12_eco : Number,
        pb_12_maths : Number,
        pb_12_krashi : Number,
        pb_12_pbshu : Number,
        pb_12_fasal : Number,
        dig_9_sst : Number,
        dig_9_sc : Number,
        dig_9_maths : Number,
        dig_9_eng : Number,
        dig_9_hin : Number,
        dig_9_skt : Number,
        dig_10_sst : Number,
        dig_10_sc : Number,
        dig_10_maths : Number,
        dig_10_eng : Number,
        dig_10_hin : Number,
        dig_10_skt : Number,
        dig_11_eng :Number,
        dig_11_hin : Number,
        dig_11_phy : Number,
        dig_11_chem : Number,
        dig_11_bio : Number,
        dig_11_socio : Number,
        dig_11_ps : Number,
        dig_11_his : Number,
        dig_11_geo : Number,
        dig_11_eco : Number,
        dig_11_maths : Number,
        dig_11_krashi : Number,
        dig_11_digshu : Number,
        dig_11_fasal : Number,
        dig_12_eng :Number,
        dig_12_hin : Number,
        dig_12_phy : Number,
        dig_12_chem : Number,
        dig_12_bio : Number,
        dig_12_socio : Number,
        dig_12_ps : Number,
        dig_12_his : Number,
        dig_12_geo : Number,
        dig_12_eco : Number,
        dig_12_maths : Number,
        dig_12_krashi : Number,
        dig_12_digshu : Number,
        dig_12_fasal : Number,
        shivlal_project_9_sst : Number,
        shivlal_project_9_sc : Number,
        shivlal_project_9_maths : Number,
        shivlal_project_9_eng : Number,
        shivlal_project_9_hin : Number,
        shivlal_project_9_skt : Number,
        shivlal_project_10_sst : Number,
        shivlal_project_10_sc : Number,
        shivlal_project_10_maths : Number,
        shivlal_project_10_eng : Number,
        shivlal_project_10_hin : Number,
        shivlal_project_10_skt : Number,
        shivlal_project_11_eng :Number,
        shivlal_project_11_hin : Number,
        shivlal_project_11_phy : Number,
        shivlal_project_11_chem : Number,
        shivlal_project_11_bio : Number,
        shivlal_project_11_socio : Number,
        shivlal_project_11_ps : Number,
        shivlal_project_11_his : Number,
        shivlal_project_11_geo : Number,
        shivlal_project_11_eco : Number,
        shivlal_project_11_maths : Number,
        shivlal_project_11_krashi : Number,
        shivlal_project_11_shivlal_projectshu : Number,
        shivlal_project_11_fasal : Number,
        shivlal_project_12_eng :Number,
        shivlal_project_12_hin : Number,
        shivlal_project_12_phy : Number,
        shivlal_project_12_chem : Number,
        shivlal_project_12_bio : Number,
        shivlal_project_12_socio : Number,
        shivlal_project_12_ps : Number,
        shivlal_project_12_his : Number,
        shivlal_project_12_geo : Number,
        shivlal_project_12_eco : Number,
        shivlal_project_12_maths : Number,
        shivlal_project_12_krashi : Number,
        shivlal_project_12_shivlal_projectshu : Number,
        shivlal_project_12_fasal : Number,
        mn_project_9_sst : Number,
        mn_project_9_sc : Number,
        mn_project_9_maths : Number,
        mn_project_9_eng : Number,
        mn_project_9_hin : Number,
        mn_project_9_skt : Number,
        mn_project_10_sst : Number,
        mn_project_10_sc : Number,
        mn_project_10_maths : Number,
        mn_project_10_eng : Number,
        mn_project_10_hin : Number,
        mn_project_10_skt : Number,
        navbodh_practicle_9 : Number,
navbodh_practicle_10 : Number,
navbodh_practicle_11_phy : Number,
navbodh_practicle_11_chem : Number,
navbodh_practicle_11_bio : Number,
navbodh_practicle_12_phy : Number,
navbodh_practicle_12_chem : Number,
navbodh_practicle_12_bio : Number,
shivlal_guide_3: Number,
shivlal_guide_4 : Number,
shivlal_guide_5 : Number,
shivlal_guide_6: Number,
shivlal_guide_7 : Number,
shivlal_guide_8 : Number,
shivlal_guide_9: Number,
shivlal_guide_10 : Number,
keshav_guide_3: Number,
keshav_guide_4 : Number,
keshav_guide_5 : Number,
keshav_guide_6: Number,
keshav_guide_7 : Number,
keshav_guide_8 : Number,
keshav_guide_9: Number,
keshav_guide_10 : Number
  })
  
const PA_DATA = mongoose.model('Pariksha_Adhyan',pa_Schema);
  
  
module.exports = PA_DATA;