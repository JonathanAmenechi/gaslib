export function normalize(source){
    return source.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
}