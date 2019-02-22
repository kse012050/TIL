# 예외처리(Exception)
예외(Exception)란 사용자의 잘못된 조작 또는 개발자의 잘못된 코딩으로 인해 발생하는 프로그램 오류를 말합니다  
예외가 발생하면 프로그램이 종료가 된다는 것은 에러와 동일하지만  
예외는 예외처리(Exception Handling)을 통해 프로그램을 종료 되지 않고 정상적으로 작동되게 만들어줄 수 있습니다 
~~~
Java / Android 에서 예외처리는 Try Catch문을 통해 해줄 수 있습니다
~~~
## Try Catch Finally
~~~java
try{
    //에러가 발생할 수 있는 코드
    throw new Exception(); //강제 에러 출력 
}catch (Exception e){
    //에러시 수행
     e.printStackTrace(); //오류 출력(방법은 여러가지)
     throw e; //최상위 클래스가 아니라면 무조건 던져주자
}finally{
    //무조건 수행
} 
~~~
![TryCatchFinally이미지](https://t1.daumcdn.net/cfile/tistory/9947C14F5C1BB0950C)

Try블록에는 __예외가 발생할 수 있는 코드__ 가 위치합니다  
Try 블록의 코드가 예외없이 정상 실행되면 catch블록의 코드는 실행되지 않고 finally 블록의 코드를 실행합니다  
Try블록의 코드에서 __예외가 발생하면__ 즉시 실행을 멈추고 catch블록으로 이동하여 예외처리 코드를 실행합니다  
그리고 finally블록의 코드를 실행합니다  
__finally블록은 생략 가능합니다__

## 여러가지 예외들
### ArithmeticException
정수를 0으로 나눌경우 발생합니다

### ArrayIndexOutOfBoundsExcetion
배열의 범위를 벗어난 index를 접근할 시 발생합니다

### ClassCastExcetion
변환할 수 없는 타입으로 객체를 반환 시 발생합니다

### NullPointException
존재하지 않는 레퍼런스를 참조할때 발생합니다

### IllegalArgumentException
잘못된 인자를 전달 할 때 발생합니다

### IOException
입출력 동작 실패 또는 인터럽트 시 발생합니다

### OutOfMemoryException
메모리가 부족한 경우 발생합니다

### NumberFormatException
문자열이 나타내는 숫자와 일치하지 않는 타입의 숫자로 변환시 발생합니다

## 빈도수가 높은 예외
### NullPointException
객체 참조가 없는 상태일 때 발생합니다  
즉 null 값을 갖는 참조변수로 객체 접근 연산자인 토드(.)를 사용할 때 발생합니다  
객체가 없는 상태에서 객체를 사용하려 했으니 예외가 발생하는 것입니다

### ArrayIndexOutOfBoundsExcetion
배열에서 인덱스 범위를 초과하여 사용할 경우 발생합니다  

### NumberFormatException
문자열을 숫자타입으로 변경할 때, 숫자타입으로 변경할 수 없는 문자열을 치환시키려고 하면 발생하는 에러입니다

### ClassCastExcetion
타입 변환은 상위 클래스와 하위클래스간에 발생하고 구현 클래스와 인터페이스간에도 발생합니다. 이런 관계가 아니면 클래스는 다른 클래스로 타입을 변환할 수 없습니다. 하지만 이 규칙을 무시하고 억지로 타입을 변환시킬경우 발생하는 에러입니다

## Throw/Throws의 중요성
최상단 클래스를 제외한 나머지 클래스에서의 예외처리는 반드시 Throw/Throws를 해주어야 합니다  
그렇지 않으면 예외처리를 해주었음에도 불구하고 Main에서는 Exception을 전달받지 못하여 개발자가 예외를 인지못하는 경우가 생길 수 있습니다  

![Throw중요성](https://t1.daumcdn.net/cfile/tistory/99C6463C5C1BB9EF18)

### Throws
예외(Exception)이 발생한 메소드를 호출 한 곳으로 예외 객체를 넘기는 방법 (__throws__)  
예외 처리 방법은 예외가 발생한 지점에서 try-catch 또는 try-catch-finally 블록을 이용하여 직접 처리하지 않아도 예외가 발생한 메서드를 __호출한 지점으로 예외를 전달__하여 처리하는 방법이 있습니다  
이때 사용하는 예약어가 __Throws__ 입니다

~~~java
public class ExceptionTest {

    static void callDriver() throws ClassNotFoundException{
        Class.forName("oracle.jdbc.driver.OracleDriver");
        System.out.println("완료");
    }
    
    public static void main(String args[]){
        
        try{
            callDriver();
        }catch(ClassNotFoundException e){
            System.out.println("클래스를 찾을 수 없습니다.");
        }catch(Exception e){
            System.out.println(e.getMessage());
        }finally{
            System.out.println("시스템 종료.");
        }
    }
}
~~~
1. main 함수에서 callDriver() 함수를 실행시킵니다
2. callDriver() 함수에서는 "oracle.jdbc.driver.OracleDriver" 클래스를 가져옵니다
3. 해당 클래스를 찾지 못하면 ```ClassNotFoundException``` 이 발생하는데, callDriver()에서는 throws __ClassNotFoundException__ 처리로 호출한 main 함수로 예외를 넘깁니다
4. main에서는 ```ClassNotFoundException```을 받아 catch 문에서 잡아서 "클래스를 찾을 수 없습니다." 메시지를 출력합니다
5. 마지막으로 finally가 실행되며 "시스템 종료" 를 출력합니다

### throw
사용자 정의 예외 생성(__throw__)  
기존의 예외 클래스로 예외를 처리할 수 없다면, 사용자만의 예외 클래스를 작성하여 발생시킬 수 있습니다  
사용자가 예외 클래스를 정의하려면 예외 클래스의 최상위 클래스인 ```java.long.Exception``` 클래스를 상속받아 클래스를 정의합니다  
예외는 사용자가 강제적으로 발생시킬 수도 있습니다  
자바는 예외를 발생시키기 위해 __throw__ 예약어를 사용합니다

#### class 예외 클래스 이름 extends Exception
자바 가상 머신은 프로그램 수행중에 예외가 발생하면 자동으로 해당하는 예외 객체를 발생시킨 다음 catch 블록을 수행합니다  

#### throw new 예외 클래스 이름(매개변수)
throw를 이용한 예외 발생시에도 try-catch-finally 구문을 이용한 예외 처리를 하거나, throws를 이용하여 예외가 발생한 메서드를 호출한 다른 메서드로 넘기는 예외 처리 방법을 사용해야 합니다  
~~~java
public class MyException extends Exception{
    public MyException(){
        super("내가 만든 예외");
    }
}

public class ExceptionTest {
    static void callException() throws MyException{
        throw new MyException();
    }
    
    public static void main(String args[]){
        try{
           callException();
        }catch(MyException e){
            System.out.println(e.getMessage());
        }catch(Exception e){
            System.out.println(e.getMessage());
        }finally{
            System.out.println("시스템 종료.");
        }    
    }
}
~~~
1. MyException 이라는 Exception을 상속한 예외를 만들었습니다 그리고 MyException은 "내가 만든 예외" 라는 메시지를 갖습니다
2. ExceptionTest의 main 함수가 실행되면 callException() 함수를 호출합니다
3. callException 함수는 ```MyException()``` 을 __new__로 생성한 후 callException() 함수를 호출한 main 함수로 던집니다
4. ```MyException``` 을 받은 main 함수는 catch에서 해당 예외를 받아서, 예외의 메시지를 출력합니다 "내가 만든 예외"
5. 최종적으로 finally가 실행되어 "시스템 종료"가 출력됩니다

## Try Catch Finally return 주의사항
1. try 안에 return문
    + return은 정상 동작으로 종료가 되었다는 의미이므로 finally 구문을 거쳐 정상 종료합니다

2. catch 안에 return 문
    + catch 안에 return문은 거의 쓸일이 없습니다 
    + 똑같이 finally 구문을 거쳐 정상 종료합니다

3. finally 안에 return문
 + 문제!!!
    + finally 안에 return을 할 경우, return이 정상 종료를 의미 하므로 try 구문에서 발생한 Exception이 출력이 되지 않습니다
    + 따라서, Exception이 발생했지만 발생 하지 않은
    것으로 간주 되는 것입니다


4. finally 안에 또 다른 try catch문
    + 이 부분도 생각 많이 해야합니다
    + finally 구문에서 생기는 Exception이 그 전에 생긴
    Exception을 잡아 먹어버립니다
    + 그래서 try 안에서 발생한 부분을 파악 할 수 없을가능성이 있습니다



[예외처리(Exception) 내용 출처](https://coding-factory.tistory.com/280)

[Throw/Throws 내용 출처](https://hyeonstorage.tistory.com/203)

[Try Catch Finally return 주의사항 내용 출처](https://gogorchg.tistory.com/entry/JAVA-try-catch-finally-%EC%82%AC%EC%9A%A9-%EC%8B%9C-%EB%AC%B8%EC%A0%9C%EC%A0%90)
