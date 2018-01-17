package com.calculator_v2;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;

import com.fathzer.soft.javaluator.DoubleEvaluator;

public class CalculatorManager extends ReactContextBaseJavaModule{
    public CalculatorManager(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CalculatorManager";
    }

    @ReactMethod
    public void calculate (String expression, Callback call) {
        Double result=0.0;
        try {
            result = new ExtendedDoubleEvaluator().evaluate(expression);
            call.invoke(result.toString());
        } catch (Exception e) {
            call.invoke("Ошибка");
        }
    }

}
