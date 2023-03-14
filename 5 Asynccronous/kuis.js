class NetworkError extends Error {
    constructor(message) {
      super(message);
      this.name = 'NetworkError';
    }
  }
// TODO: 1
const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (isOffline) {
                reject(new NetworkError('Gagal mendapatkan data dari internet'), null);
            }else{
                resolve({ name: 'John', age: 18 });
            }
          }, 500);
    });
  };

// TODO: 2
async function gettingUserName(){
    try {
        let user = await fetchingUserFromInternet(false);
        console.info(user.name); 
    } catch (error) {
        return error.message;
    }
}
gettingUserName()