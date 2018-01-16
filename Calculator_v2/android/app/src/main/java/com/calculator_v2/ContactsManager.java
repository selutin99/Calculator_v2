package com.calculator_v2;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;


public class ContactsManager extends ReactContextBaseJavaModule{
    public ContactsManager (ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "ContactsManager";
    }

    @ReactMethod
    public void calculate (String name, Callback call) {
        call.invoke("Во время создания данного приложения умерла мать: " + name +" пусть земля ей будет пуховиком");
    }

}
