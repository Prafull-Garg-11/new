let a=[100,200,10,1]
b=(a.filter((ele)=>ele<=10)).sort()
console.log(b)

let x=[13,21,45,1]
y=(x.filter((ele)=>ele<45)).sort()
console.log(y)

let st=["abc","xyza","abcde","dfesa"]
out=st.filter((ele)=>ele.length==5).toString()
console.log(out)


var d=[]
var d=[1,32,211,42]
console.log(d)

//declaration on same let variavle is not valid.
/*let c=[]
let c=[1,32,211,42]
console.log(c)*/


/*
ARRAY IN JAVA SCRIPT
every()
find()
some()
findindex()
flat()
concat()
indexof()*/


let m=[1,2,3,4]
let p=m.every((ele)=>ele<5)
console.log(p)

let n=m.some((ele)=>ele>4)
console.log(n)


let g=[2,4,221,1]
let k=g.concat(m)
console.log(k)

let v=g.slice(1)
console.log(v)

let l=["a","b","c","d"]
let j=l.slice(1,2)
console.log(j)



var q=["cars","bike","cycle"]
var w=q.slice(1,3)
var e=w[0]+ " and " +w[1]
console.log(e)


var t=q.slice(1,3).join(" and ")
console.log(t)

let i=[2,3,4]
let o=[30,40,50]
var u=i.concat(o)
console.log(u)
var u=i.concat(i)
console.log(u)
var u=o.concat(i)
console.log(u)



var u="Hi Im "
var u=u.split(" ").slice(0,2).join(" & ")
console.log(u)