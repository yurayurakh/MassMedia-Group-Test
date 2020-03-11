export const PUT_DATA = 'PUT_DATA';

export const putData = (dataFromServer) => {
    return {
        type: PUT_DATA,
        payload: dataFromServer
    }
}