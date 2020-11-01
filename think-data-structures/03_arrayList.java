package com.jin;

import java.util.List;

public class ArrayList {

    public static void main(String[] args) {

        List<Integer> list = new java.util.ArrayList<Integer>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);

        System.out.println(list.size());

        for (int i=0; i<list.size(); i ++) {
            System.out.println(list);
        }

        list.remove(new Integer(2));

        for (int i=0; i<list.size(); i ++) {
            System.out.println(list);
        }

        System.out.println(list.size());

        // That means that list.remove(1) removes the object at position 1
        // and remove(new Integer(1)) removes the first occurrence of the specified element from this list.


        int[] array = new int[5];
        System.out.println(array.length); // 5

        String text = "textLength";
        System.out.println(text.length()); // 10

        java.util.ArrayList size = new java.util.ArrayList();
        System.out.println(size.size()); // 0

        String[] name = {"dev", "jin", "dog", "jjinii"};
        System.out.println(name.length); // 4 (index + 1)
        System.out.println(name.length -1); // 3


    }
}
