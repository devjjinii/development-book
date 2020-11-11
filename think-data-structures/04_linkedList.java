package com.jin;

import java.util.Iterator;
import java.util.LinkedList;

public class LinkedListTest {

    public static void main(String[] args){

        LinkedList<Integer> list = new LinkedList<Integer>();

        list.addFirst(1);
        list.addLast(2);
        list.add(3);
        list.add(1,10); //index, element
        list.addLast(5);

        // list.remove(3); // index

        System.out.println(list); // [1,10,2,3,5]
        System.out.println(list.size()); //5

        Iterator<Integer> iter = list.iterator();
        while(iter.hasNext()) {
            System.out.println(iter.next());
        }

        System.out.println(list.contains(5));
        System.out.println(list.indexOf(6)); // -1
    }

    // indexof 은 값이 없으면 -1 리턴
}
