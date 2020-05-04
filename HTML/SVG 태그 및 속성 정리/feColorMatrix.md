# ```<feColorMatrix>```
SVG 필터 소자는 변환 행렬에 기초하여 색을 변화시킵니다.  
각 픽셀의 색상 값 ```[R,G,B,A]``` 곱한 행렬 새로운 색상을 생성하기 위해 5 x 5행렬 컬러입니다.

> | R' |　　　| r1 r2 r3 r4 r5 |　　 | R |  
> | G' |　　　| r1 r2 r3 r4 r5 |　　 | G |  
> | B' |　= 　| r1 r2 r3 r4 r5 |　*　| B |  
> | A' |　　　| r1 r2 r3 r4 r5 |　　 | A |  
> | 1' |　　　| r1 r2 r3 r4 r5 |　　 | 1 |

간단히 말해서, 아래는 새 픽셀의 각 색상 채널이 계산되는 방법입니다. 마지막 행은 값이 일정하므로 무시됩니다.  

> R' = r1*R + r2*G + r3*B + r4*A + r5  
>G' = g1*R + g2*G + g3*B + g4*A + g5  
>B' = b1*R + b2*G + b3*B + b4*A + b5  
>A' = a1*R + a2*G + a3*B + a4*A + a5 

[내용 출처 MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix)