package com.calculator_v2;

import android.os.Build;
import android.support.annotation.RequiresApi;

import com.calculator_v2.ast.Operation;
import com.calculator_v2.tokenizer.AbstractTreeBuilder;
import com.calculator_v2.tokenizer.TokenizerException;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;

import net.objecthunter.exp4j.Expression;
import net.objecthunter.exp4j.ExpressionBuilder;

public class DerivativeManager extends ReactContextBaseJavaModule{
    public DerivativeManager(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "DerivativeManager";
    }

    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @ReactMethod
    public void justEval (String expr, Callback call) {
        Expression expression;
        try {
            AbstractTreeBuilder tree = new AbstractTreeBuilder(expr);
            Operation derivative = tree.getTree().getDerivative();
            call.invoke(derivative.toString());

        } catch (TokenizerException e) {
            call.invoke("Ошибка! Проверьте правильность введённой функции!");
        }
        catch (Exception e){
            call.invoke("Ошибка! Проверьте правильность введённой функции!");
        }
    }

}
