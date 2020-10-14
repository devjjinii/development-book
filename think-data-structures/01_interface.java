package com.jin;

import java.util.LinkedList;
import java.util.List;

public class Interface {

    private List list;

    public Interface() {
        list = new LinkedList();
    }

    private List getList() {
        return list;
    }

    public static void main(String[] args) {
        Interface itf = new Interface();
        List list = itf.getList();

//        list.add("Hello");
        System.out.println(list);
    }
}
