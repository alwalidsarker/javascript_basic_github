let learner = {
  name : 'walidsarker',
  userId : 1,
  logIn : true,
  greeting : function(){
    console.log(`${this.name} is wellcomed in this course`);
  },
};
learner.greeting()