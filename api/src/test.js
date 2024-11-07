const rez = function(value){
    return {
      state: 'resolved',
      result: value,

      then: function(callback){
        callback(value)
      },
      catch: function(callback){
        callback(null)
      },
      finally: function(callback){
        callback()
      }
    }
  }
  
  const rej = function(value){
    return {
      state: 'rejected',
      result: value,

      then: function(callback){
        callback(null)
      },
      catch: function(callback){
        callback(value)
      },
      finally: function(callback){
        callback()
      }
    }
  }

  //resume here

  
  
  class Aproma {
    
    constructor(executorfn){
      executorfn(rezolve, rejekt)
      this.state = 'pending'
      this.value = undefined
    }
    rezolve(value){ this.state = rezolved; this.value = value }
    rejekt(error){ this.state = rejekted; this.value = error }

    then(callback) {
        callback(this.state)
      }
    catch(callback){
        callback(value)
      }
    finally(callback){
        callback()
      }
    
  }

  const aproma = new Aproma(function(rez, rej){
    rez('am a Port Harcourt boy o')
  })

  aproma.then(value => console.log(value))

  
//   {
//     state: 'pending',
//     value: undefined,
//     then: function(callback){
//         callback(null)
//     },
//     catch: function(callback){
//         callback(value)
//     },
//     finally: function(callback){
//         callback()
//     }
    
// }
  
  
  